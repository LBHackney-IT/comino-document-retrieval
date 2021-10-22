const rp = require("request-promise");

module.exports = () => {
  return {
    execute: async function (id) {
      try {
        return await rp(
          `https://hackneyuhlive.civicad360.co.uk/scripts/w2isapi.dll/classes::retrieveimage?${id}`,
          {
            method: "GET",
          }
        ).then((response) => {
          return response;
        });
      } catch (e) {
        return e.message;
      }
    },
  };
};
