const serverless = require("serverless-http");
const express = require("express");
const app = express();
const { downloadDocument, getPreSignedUrl } = require("./lib/Dependencies");
const { W2DocExtensionLookup } = require("../Constants");
const mimeTypes = require("mime-types");

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
    const response = await downloadDocument(req.params.id);

    const fileExt = W2DocExtensionLookup[msg] || type;
    const mimeType = mimeTypes.lookup(fileExt) || "application/octet-stream";


    res.set('Content-Type', mimeType);
    res.set('Content-Disposition', `attachment; filename="${req.params.id}.msg"`);
    res.send(response);
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
