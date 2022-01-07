const AWS = require("aws-sdk");

// GATEWAYS
const getDocumentGateway = require("./Gateways/GetDocument")();

const s3Gateway = require("./Gateways/S3Gateway")({
  s3: new AWS.S3(),
});

const dbGateway = require("./Gateways/CominoGateway")({
  dbConnection: require("./SqlServerConnection")({
    dbUrl: process.env.CONNECTION_STRING,
  }),
});

// USE CASES
const getDocumentType = require("./UseCases/GetDocumentType")();

const getDocument = require("./UseCases/GetDocument")({
  getDocumentGateway,
  getDocumentType,
});
const saveDocumentToS3 = require("./UseCases/SaveDocumentToS3")({
  s3Gateway,
});

const downloadDocument = require("./UseCases/DownloadDocument")({
  getDocument,
  saveDocumentToS3,
});

const downloadImageServerDocument = require("./UseCases/DownloadImageServerDocument")({
  getDocument,
  saveDocumentToS3,
});

const getPreSignedUrl = require("./UseCases/GetPreSignedUrl")({
  s3Gateway,
});

const getDocumentMetadata = require("./UseCases/GetDocumentMetadata")({
  dbGateway,
});

module.exports = {
  getDocumentGateway,
  s3Gateway,
  dbGateway,
  getDocument,
  saveDocumentToS3,
  downloadDocument,
  downloadImageServerDocument,
  getPreSignedUrl,
  getDocumentType,
  getDocumentMetadata,
};
