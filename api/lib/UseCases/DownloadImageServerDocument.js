const { MimeType, W2DocExtensionLookup } = require("../Constants");
const mimeTypes = require("mime-types");

module.exports = (options) => {
  const getDocument = options.getDocument;
  const saveDocumentToS3 = options.saveDocumentToS3;
  return async (metadata) => {
    const fileExt = W2DocExtensionLookup[metadata.type] || metadata.extension;
    const mimeType = mimeTypes.lookup(fileExt) || MimeType.Default;
    const id = metadata.imageId;
    const document = await getDocument(id);
    if (!document) {
      throw new Error(`Could not get document with id: ${id}`);
    }
    await saveDocumentToS3(id, document);
    return {mimeType: mimeType,doc: document,filename: `${id}.${fileExt}`};
  };
};
