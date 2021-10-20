const rp = require("request-promise");

module.exports = () => {
  // const id = "27810857";
  const type = "msg";
  return {
    execute: async (id) => {
      const document = getDocument();
      const result = document.execute(id, type);
      return result;
    },
  };
};
