const AWS = require("aws-sdk");

// GATEWAYS
const getDocumentGateway = require("../lib/Gateways/GetDocument")();

const s3Gateway = require("../lib/Gateways/S3Gateway")({
  s3: new AWS.S3(),
});

// USE CASES
const downloadDocument = require("../lib/UseCases/DownloadDocument")({
  getDocumentGateway,
});
const saveDocumentToS3 = require("../lib/UseCases/SaveDocumentToS3")({
  s3Gateway,
  downloadDocument,
});

module.exports = {
  getDocumentGateway,
  s3Gateway,
  downloadDocument,
  saveDocumentToS3,
};
