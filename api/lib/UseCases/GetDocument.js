module.exports = (options) => {
  const getDocumentGateway = options.getDocumentGateway;
  const getDocumentType = options.getDocumentType;
  return async (id) => {

    // const fileExt = W2DocExtensionLookup[metadata.type] || metadata.extension;
    // const mimeType = mimeTypes.lookup(fileExt) || MimeType.Default;
    // const outputDoc = await imageServerGateway.getDocument(metadata.imageId);
    // return {
    //   mimeType,
    //   doc: outputDoc,
    //   filename: `${metadata.id}.${fileExt}`
    // };

    const fileExt = W2DocExtensionLookup["PhoneCall"] || metadata.extension;
    const document = await getDocumentGateway.execute(id);
    
    document.type = getDocumentType("PhoneCall");
    return document;
  };
};
