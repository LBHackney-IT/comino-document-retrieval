module.exports = (options) => {
  const s3Gateway = options.s3Gateway;
  return async (id, document) => {
    if (document) {
      const type = getDocumentType("msg");
      await s3Gateway.put(id, document, type);
    }
    return document;
  };
};
