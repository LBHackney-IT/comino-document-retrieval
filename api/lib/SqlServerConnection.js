const sql = require("mssql");
const { parseURL } = require("whatwg-url");

module.exports = (options) => {
  const dbUrl = parseURL(options.dbUrl);
  const config = {
    user: dbUrl.username,
    password: dbUrl.password,
    server: dbUrl.host,
    database: dbUrl.path[0],
    requestTimeout: 60000,
  };

  return {
    request: async (query, params) => {
      const pool = await new sql.ConnectionPool(config).connect();
      const request = new sql.Request(pool);
      if (params) {
        params.forEach((param) => {
          request.input(param.id, sql[param.type], param.value);
        });
      }
      const result = await request.query(query);
      await sql.close();

      // trim whitespace from varchar column values
      result.recordset.forEach((record) => {
        Object.keys(record).forEach((key) => {
          if (typeof record[key] === "string") {
            record[key] = record[key].trim();
          }
        });
      });

      return result.recordset;
    },
  };
};
