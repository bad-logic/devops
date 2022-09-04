import express from "express";
import httpProxy from "http-proxy";
import Logger from "./utils/logger.js";

const app = express();
const apiProxy = httpProxy.createProxyServer();

const { SRV_NAME, TARGET, PORT } = process.env;
const logger = new Logger(SRV_NAME);

app.use((req, res) => {
  logger.send(TARGET, req.url, Date.now());
  apiProxy.web(req, res, { target: TARGET });
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
