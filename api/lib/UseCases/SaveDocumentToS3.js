const AWS = require("aws-sdk");

module.exports = (options) => {
  const s3Gateway = options.s3Gateway;
  const downloadDocument = options.downloadDocument;
  return async () => {
    const id = "27810857";
    const document = await downloadDocument(id);

    if (document) {
      await s3Gateway.put(id, document);
    }
    return document;
  };
};
