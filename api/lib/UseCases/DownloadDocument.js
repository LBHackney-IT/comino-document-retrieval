module.exports = (options) => {
  const getDocument = options.getDocument;
  const saveDocumentToS3 = options.saveDocumentToS3;
  return async (id) => {
    const {mimeType,document,fileName} = await getDocument(id);
    if (!document) {
      throw new Error(`Could not get document with id: ${id}`);
    }
    await saveDocumentToS3(id, document);
    return {mimeType,document,fileName};
  };
};
