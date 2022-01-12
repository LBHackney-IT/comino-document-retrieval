const { TestWatcher } = require("@jest/core");
const { Client } = require("pg");
const { parseURL, URLSearchParams } = require("whatwg-url");

module.exports = (options) => {
  const dbUrl = parseURL(options.dbUrl);
  const config = {
    user: dbUrl.username,
    password: dbUrl.password,
    host: dbUrl.host,
    database: dbUrl.path[0],
    //this port is for AWS
     port: 5502,
    // This port is for local
    // port: 5432,
    requestTimeout: 60000,
  };

  return {
    request: async (query, params) => {
      const client = new Client(config);
      await client.connect().then(() => console.log("Connected successfuly"));

      const myQuery = {
        name: "query name",
        text: query,
        values: [params[0].value],
      };

      const result = await client.query(myQuery);
      await client.end();
      return result.rows;
    },
  };
};
