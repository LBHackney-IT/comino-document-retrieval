const {Client} = require('pg');
const { parseURL, URLSearchParams } = require("whatwg-url");

module.exports = (options) => {
  const dbUrl = parseURL(options.dbUrl);
   const config = {
     user: dbUrl.username,
     password: dbUrl.password,
     server: dbUrl.host,
     database: dbUrl.username,
     port: 5502,
     requestTimeout: 60000,
   };

  return {
    request: async (query, params) => {
      const client = new Client(config)
      client.connect()
      console.log("config =" + config)

      const myQuery = {
        name: 'query name',
        text: query,
        values:[params[0].value]
      }

      const res = await client.query(myQuery)
      await client.end()
      return res.rows;
    },
  };
};