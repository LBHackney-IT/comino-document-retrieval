module.exports = (options) => {
  const getDocumentGateway = options.getDocumentGateway;
  // const id = "27810857";
  const type = "msg";
  return async (id) => {
    const document = await getDocumentGateway.execute(id, type);
    return document;
  };
};
