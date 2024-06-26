async function startApp() {
  console.log("starting app");
}

startApp().then(() => {
  console.log("app started");
});

process.on("uncaughtException", function (err) {
  console.log("uncaught Exception", err.message);
});

process.on("unhandledRejection", function (reason, promise) {
  console.log("unhandled Rejection at ", promise, "reason", reason);
});
