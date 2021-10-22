const AWS = require("aws-sdk");

// GATEWAYS
const getDocumentGateway = require("./Gateways/GetDocument")();

const s3Gateway = require("./Gateways/S3Gateway")({
  s3: new AWS.S3(),
});

// USE CASES
const getDocument = require("./UseCases/GetDocument")({
  getDocumentGateway,
});
const saveDocumentToS3 = require("./UseCases/SaveDocumentToS3")({
  s3Gateway,
});

const downloadDocument = require("./UseCases/DownloadDocument")({
  getDocument,
  saveDocumentToS3,
});

const getPreSignedUrl = require("./UseCases/GetPreSignedUrl")({
  s3Gateway,
});

const getDocumentType = require("./UseCases/GetDocumentType")();

module.exports = {
  getDocumentGateway,
  s3Gateway,
  getDocument,
  saveDocumentToS3,
  downloadDocument,
  getPreSignedUrl,
  getDocumentType,
};
