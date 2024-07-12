const http = require("http");
const { getRedisConnection } = require("./redis");
const { routesHandler } = require("./routes");

const PORT = process.env.PORT || 3000;
http.createServer(routesHandler).listen(PORT, async () => {
  try {
    console.log(`server running on localhost:${PORT}`);
    const client = await getRedisConnection();
    console.log("redis connected");
    await client.set("connected", "true");
  } catch (err) {
    console.error({ err });
    process.exit(1);
  }
});
