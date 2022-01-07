const { MimeType, W2DocType, W2DocExtensionLookup } = require('../Constants');
const mimeTypes = require('mime-types');


module.exports = (options) => {
  const s3Gateway = options.s3Gateway;
  return async (metadata) => {
    const fileExt = W2DocExtensionLookup[metadata.type] || metadata.extension;
    const mimeType = mimeTypes.lookup(fileExt) || MimeType.Default;
    const id = metadata.imageId;
    const url = await s3Gateway.getUrl(id, mimeType, fileExt);
    return url;
  };
};
