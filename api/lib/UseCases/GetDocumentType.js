const mimeTypes = require("mime-types");
const { MimeType, W2DocExtensionLookup } = require("../Constants");

module.exports = function () {
  return async function (type) {
    const fileExt = W2DocExtensionLookup[type] || type;
    const mimeType = mimeTypes.lookup(fileExt) || MimeType.Default;
    console.log(`The identified type is ${mimeType}`);
    return mimeType;
  };
};
