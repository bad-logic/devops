const options = { coredump: false, timeout: 1000 };

const exit = (code) => {
  if (options.coredump) {
    process.abort();
  } else {
    process.exit(code);
  }
};

export const gracefulShutdown = (server) => (code) => {
  // close http server. no more connections are received
  server.close(() => {
    exit(code);
  });

  // wait options.timeout ms for cleanup if any pending requests or connections needs to be closed

  // Normally, an active setTimeout keeps the process running, even if all other work is complete.
  // By calling .unref(), the process can exit naturally if there is nothing else keeping the event loop active.
  // .unref() method ensures that the timer does not keep the Node.js event loop active.
  setTimeout(() => {
    console.error('Forcing shutdown after timeout.');
    exit(code);
  }, options.timeout).unref();
};
