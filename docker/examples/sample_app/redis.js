const Redis = require("ioredis");

let _redisConnection = undefined;

const REDIS_PORT = +process.env.REDIS_PORT || 6379;
const REDIS_HOST = process.env.REDIS_HOST || "devredis";

const getRedisConnection = () => {
  if (!_redisConnection) {
    _redisConnection = new Redis({
      port: REDIS_PORT,
      host: REDIS_HOST,
    });
  }
  return _redisConnection;
};

module.exports = {
  getRedisConnection,
};
