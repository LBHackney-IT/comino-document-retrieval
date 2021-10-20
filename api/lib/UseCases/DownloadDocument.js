module.exports = (options) => {
  const getDocument = options.getDocument;
  const saveDocumentToS3 = options.saveDocumentToS3;
  const id = "27810857";
  return async () => {
    const document = await getDocument(id);
    await saveDocumentToS3(id, document);
    return document;
  };
};
