module.exports = (options) => {
  const getDocumentGateway = options.getDocumentGateway;
  const type = "msg";
  return async (id) => {
    const document = await getDocumentGateway.execute(id, type);
    return document;
  };
};
