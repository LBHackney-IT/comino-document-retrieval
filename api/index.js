const serverless = require("serverless-http");
const express = require("express");
const app = express();
const downloadDocument = require("./lib/UseCases/DownloadDocument");

app.get("/download", async (req, res, next) => {
  try {
    const response = await downloadDocument();

    res.send(response);
  } catch (err) {
    console.log("download failed", { error: err });
    next(err);
  }
});

app.get("/ping", async (req, res, next) => {
  try {
    res.sendStatus(200);
  } catch (err) {
    console.log("Ping endpoint failed", { error: err });
    next(err);
  }
});

module.exports = {
  handler: serverless(app),
};
