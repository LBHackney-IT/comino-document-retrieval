const serverless = require("serverless-http");
const express = require("express");
const app = express();
const {
  downloadDocument,
  getPreSignedUrl,
  getDocumentMetadata,
  downloadImageServerDocument,
} = require("./lib/Dependencies");

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
    const { mimeType, document, fileName } = await downloadDocument(
      req.params.id
    );

    res.setHeader("Content-Type", mimeType);
    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
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

app.get("/metadata/:id", async (req, res, next) => {
  try {
    const response = await getDocumentMetadata(req.params.id);
    res.send(response);
  } catch (err) {
    next(err);
  }
});

app.get("/metadata/download/:id", async (req, res, next) => {
  try {
    //metadata
    const metadata = await getDocumentMetadata(req.params.id);
    //downloads document
    console.log(metadata)
    const { mimeType, doc, filename } = await downloadImageServerDocument(metadata);
    res.set('Content-Type', mimeType);
    res.set('Content-Disposition', `attachment; filename="${filename}"`);
    res.send(doc);

  } catch (err) {
    next(err);
  }
});

app.get("/metadata/documentUrl/:id", async (req, res, next) => {
  try {
     //metadata
     const metadata = await getDocumentMetadata(req.params.id);
     console.log(metadata)
    const response = await getPreSignedUrl(metadata);
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
