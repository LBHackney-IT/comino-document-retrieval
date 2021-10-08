module.exports = options =>  {
    console.log("just got inside getDocument")
    return {
        execute: async (id, type) => {
            console.log("I am in getDocument")
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
                logger.error(`Error fetching document: ${e}`, e);
                return [];
            }
        }
    }
}
