const { W2DocType } = require('../Constants');

module.exports = function(options) {
  const dbGateway = options.dbGateway;

  return async function(id) {
    console.log("about to call the database with the value passed")
    const metadata = await dbGateway.getDocumentMetadata(id);
    console.log("just called the database and the metadata is = "+ metadata)
    metadata.type = W2DocType[metadata.type];

    // if (metadata.type === 'Scanned') {
    //   metadata.pages = await dbGateway.getDocumentPages(metadata.id);
    // }
    // if (metadata.type === 'Email') {
    //   metadata.emailMetadata = await dbGateway.getEmailMetadata(
    //     metadata.imageId
    //   );
    //   metadata.emailMetadata.attachments = await dbGateway.getEmailAttachments(
    //     metadata.imageId
    //   );
    //   metadata.imageId = null;
    // }
    return metadata;
  };
};
