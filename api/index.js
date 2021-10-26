const serverless = require("serverless-http");
const express = require("express");
const app = express();
const { downloadDocument, getPreSignedUrl } = require("./lib/Dependencies");

app.get("/ping", async (req, res, next) => {
  try {
    res.sendStatus(200);
  } catch (err) {
    console.log("Ping endpoint failed", { error: err });
    next(err);
  }
});

app.get("/download/:id", async (req, res, next) => {
  try {
    const {mimeType,document,fileName} = await downloadDocument(req.params.id);

    res.setHeader("Content-Type", mimeType);
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${fileName}"`
    );
    res.send(document);
  } catch (err) {
    console.log("Download failed", { error: err });
    next(err);
  }
});

app.get("/documentUrl/:id", async (req, res, next) => {
  try {
    const response = await getPreSignedUrl(req.params.id);
    // res.set('Content-Type', res.Type);
    // res.set('Content-Disposition', `attachment; filename="${req.params.id}.xml"`);
    res.send(response);
  } catch (err) {
    console.log("Getting the document url failed", { error: err });
    next(err);
  }
});

module.exports = {
  handler: serverless(app),
};
