const serverless = require("serverless-http");
const express = require("express");
const app = express();
const downloadDocument = require("./lib/UseCases/DownloadDocument");
const rp = require("request-promise");
const { saveDocumentToS3 } = require("./lib/Dependencies");

app.get("/download", async (req, res, next) => {
  try {
    const response = await saveDocumentToS3();
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

app.get("/google", async (req, res, next) => {
  try {
    return await rp("https://google.com", {
      method: "GET",
    }).then((response) => {
      console.log("Google accessed!");
      res.sendStatus(200);
      return response;
    });
  } catch (err) {
    console.log("Google failed", { error: err });
    next(err);
  }
});

module.exports = {
  handler: serverless(app),
};
