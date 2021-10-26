module.exports = (options) => {
  const getDocumentGateway = options.getDocumentGateway;
  const getDocumentType = options.getDocumentType;
  return async (id) => {
    const document = await getDocumentGateway.execute(id);
    const { mimeType, fileName } = await getDocumentType("Scanned", id);
    return { mimeType, document, fileName };
  };
};
