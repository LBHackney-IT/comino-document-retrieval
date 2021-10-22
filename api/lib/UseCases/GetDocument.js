module.exports = (options) => {
  const getDocumentGateway = options.getDocumentGateway;
  const getDocumentType = options.getDocumentType;
  return async (id) => {
    const document = await getDocumentGateway.execute(id);
    document.type = getDocumentType("msg");
    return document;
  };
};
