const { TestWatcher } = require('@jest/core');
const {Client} = require('pg');
const { parseURL, URLSearchParams } = require("whatwg-url");

module.exports = (options) => {
  const dbUrl = parseURL(options.dbUrl);
   const config = {
     user: dbUrl.username,
     password: dbUrl.password,
     server: dbUrl.host,
     database: dbUrl.path[0],
     port: 5502,
     requestTimeout: 60000,
   };


  return {
    request: async (query, params) => {
      const client = new Client(config)
      client.connect().then(()=> console.log("Connected successfuly"))

      const myQuery = {
        name: 'query name',
        text: 'SELECT * FROM "CCDocument" WHERE  "DocNo" = 9017140'
        // values:[params[0].value]
      }

      const result = await client.query(myQuery)
      await client.end()
      console.log(result)
      // return [{id:params[0].value,user:config.user,server:config.server,database:config.database}]
      return result.rows;
    },
  };
};