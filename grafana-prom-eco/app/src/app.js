import http from 'node:http';
import Express from 'express';
import { collectDefaultMetrics, Registry, Counter, Gauge } from 'prom-client';
import Pyroscope from '@pyroscope/nodejs';
import contextManagerMiddleware from './utils/contextManager.js';
import welcomeController from './controller/welcome.controller.js';

// for profiling
Pyroscope.init({
  appName: 'node-express-demo',
});

Pyroscope.start();

// for AMP metrics
const register = new Registry();
register.setDefaultLabels({ app: 'express-demo', app_id: process.env.HOSTNAME });
collectDefaultMetrics({ timeout: 5000, register });

const httpRequestCounter = new Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

register.registerMetric(httpRequestCounter);

// console.log({ register });

const app = new Express();
// console.log({ env: process.env });

// use it if the server is running behind a proxy
// it updates x-forwarded-by
// app.set('trust-proxy', true);
// w/o proxy ip = req.ip
// behind proxy ip = req.headers['x-forwarded-for'] || req.ip;

// req.headers['x-forwarded-for'] list of ip addresses of the proxies in between client and server. rightmost is the recent ip address
// and leftmost is the ip address of the originating client

app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.route ? req.route.path : req.path,
      status: res.statusCode,
    });
  });
  next();
});

app.use(contextManagerMiddleware.deploy());

app.get('/metrics', async (req, res, next) => {
  try {
    res.set('content-type', register.contentType);
    res.send(await register.metrics());
  } catch (err) {
    console.log({ err });
    res.status(500).send();
  }
});

app.use(Pyroscope.expressMiddleware());

// app.get('/debug/pprof/profile', async (req, res, next) => {
//   try {
//     const wallHandler = profileExpressHandler('Wall', (req) => collectWall(1000 * Number(req.query.seconds)));

//     res.send(await Pyroscope.collectCpu(req.query.seconds));
//   } catch (err) {
//     console.log({ err });
//     res.status(500).send();
//   }
// });
// app.get('/debug/pprof/heap', async (req, res, next) => {
//   try {
//     const heapHandler = profileExpressHandler('Heap', () => collectHeap());
//     res.send(await Pyroscope.collectCpu(req.query.seconds));

//   } catch (err) {
//     console.log({ err });
//     res.status(500).send();
//   }
// });

app.get('/', welcomeController.welcome);

const server = http.createServer(app);

const PORT = parseInt(process.env['PORT']) || 8080;
server.listen(PORT, () => {
  console.info(`Express server running on port: ${PORT} `);
});
