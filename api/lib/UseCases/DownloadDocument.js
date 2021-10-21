module.exports = (options) => {
  const getDocument = options.getDocument;
  const saveDocumentToS3 = options.saveDocumentToS3;
  return async (id) => {
    const document = await getDocument(id);
    if (!document) {
      throw new Error(`Could not get document with id: ${id}`);
    }
    await saveDocumentToS3(id, document);
    return document;
  };
};
