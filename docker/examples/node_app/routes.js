const { fetchUsersList, saveUser } = require("./redisHelpers");

const routesHandler = (req, res) => {
  let choice = req.method;

  if (!["POST", "GET"].includes(choice)) {
    choice = "unsupported";
  }

  console.log({ url: req.url, method: req.method });

  switch (choice) {
    case "unsupported":
      res.writeHead(405, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "Unsupported Method" }));
      res.end();
      break;
    case "GET":
      handleError(req, res, handleGetRoutes);
      break;
    case "POST":
      handleError(req, res, handlePostRoutes);
      break;
    default:
      break;
  }
};

const handleGetRoutes = async (req, res) => {
  const url = req.url;
  let response = {};
  let status;
  switch (url) {
    case "/":
      status = 200;
      response = { message: "nothing to see here" };
      break;
    case "/health-check":
      status = 200;
      response = { status: "Active" };
      break;
    case "/users":
      const users = await fetchUsersList();
      status = 200;
      response = { users };
      break;
    default:
      status = 404;
      response = { message: "Resource not found" };
      break;
  }
  res.writeHead(status, { "Content-Type": "application/json" });
  res.write(JSON.stringify(response));
  res.end();
};

const handlePostRoutes = async (req, res) => {
  const url = req.url;
  let response = {};
  let body = "";
  let status;
  req.on("data", (data) => {
    body += data;
  });

  req.on("end", async () => {
    try {
      body = JSON.parse(body);
      await handleRequest();
    } catch (err) {
      reportError(err, res);
    }
  });

  const handleRequest = async () => {
    switch (url) {
      case "/users":
        const users = await saveUser(body);
        status = 200;
        response = { users };
        break;
      default:
        status = 404;
        response = { message: "Resource not found" };
        break;
    }
    res.writeHead(status, { "Content-Type": "application/json" });
    res.write(JSON.stringify(response));
    res.end();
  };
};

const handleError = async (req, res, fn) => {
  try {
    await fn(req, res);
  } catch (err) {
    reportError(err, res);
  }
};

const reportError = (err, res) => {
  console.log({ err });
  let status = 500;
  let message = "Internal server Error";
  if (err.message === "validation Error") {
    status = 422;
    message = "Validation Error";
  }
  if (err.name === "SyntaxError") {
    status = 422;
    message = "corrupted JSON data";
  }
  res.writeHead(status, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message }));
  res.end();
};

module.exports = { routesHandler };
