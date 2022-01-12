const mimeTypes = require("mime-types");
const { MimeType, W2DocExtensionLookup } = require("../Constants");

module.exports = function () {
  return async function (type, id) {
    const fileExt = W2DocExtensionLookup[type] || type;
    const mimeType = mimeTypes.lookup(fileExt) || MimeType.Default;
    return { mimeType, fileName: `${id}.${fileExt}` };
  };
};
