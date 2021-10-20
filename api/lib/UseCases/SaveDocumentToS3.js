const AWS = require("aws-sdk");

module.exports = (options) => {
  const s3Gateway = options.s3Gateway;
  return async (id, document) => {
    if (document) {
      await s3Gateway.put(id, document);
    }
    return document;
  };
};
