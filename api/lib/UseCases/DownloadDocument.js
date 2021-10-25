module.exports = (options) => {
  const getDocument = options.getDocument;
  const saveDocumentToS3 = options.saveDocumentToS3;
  const getDocumentType = options.getDocumentType;
  return async (id) => {
    //get metadata from mssql-database{ mimeType, docId, filename}
    //metadata.type =    PhoneCall
    //mDocNo AS id,
  // ContactNo AS contactId,
  // UserID AS userId,
  // DocDesc AS description,
  // DocCategory AS category,
  // DocDate AS date,
  // DirectionFg AS direction,
  // DocSource AS type,
  // FileHandle AS imageId,
  // ReceivedDate AS receivedDate,
  // FileExtension AS extension,
  // Title AS title,
  // FileName AS name           
    const document = await getDocument(id);
    if (!document) {
      throw new Error(`Could not get document with id: ${id}`);
    }
    const contentType = await getDocumentType(document.type);
    document.contentType = contentType;
    await saveDocumentToS3(id, document);
    return document;
  };
};
