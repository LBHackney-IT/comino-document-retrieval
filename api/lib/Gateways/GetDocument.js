const rp = require("request-promise");

module.exports = () => {
  return {
    execute: async function (id, type) {
      console.log("I am inside execute");
      try {
        return await rp(
          `https://hackneyuhlive.civicad360.co.uk/scripts/w2isapi.dll/classes::retrieveimage?${id} > example.${type}`,
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
