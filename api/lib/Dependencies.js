const AWS = require('aws-sdk');

// GATEWAYS
const getDocument = require('../lib/Gateways/GetDocument')();

const s3Gateway = require('../lib/Gateways/S3Gateway')({
    s3: new AWS.S3()
})

// USE CASES
const downloadDocument = require('../lib/UseCases/DownloadDocument')();
const saveDocumentToS3 = require('../lib/UseCases/SaveDocumentToS3')(s3Gateway);

module.exports = {
    getDocument,
    s3Gateway,
    downloadDocument,
    saveDocumentToS3
}