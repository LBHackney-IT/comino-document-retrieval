const AWS = require("aws-sdk");
const { downloadDocument } = require("../Dependencies");

module.exports = function (options) {
  const s3Gateway = options.s3Gateway;
  return async function () {
    const id = "27810857";
    const document = downloadDocument()
    const result = document.execute(id);

    if (document) {
      await s3Gateway.put(id, document);
    }
    return document;
  };
};
