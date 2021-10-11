const rp = require('request-promise');

module.exports = () =>  {
    return {
        execute: async (id,type) => {
            try {
                return await rp(
                    `https://hackneyuhlive.civicad360.co.uk/scripts/w2isapi.dll/classes::retrieveimage?${id} > example.${type}`,
                    {
                        method: 'GET'
                    }
                ).then(response => {
                    return response;
                  });
            } catch(e) {
                return e.message
            }
        }
    }
}