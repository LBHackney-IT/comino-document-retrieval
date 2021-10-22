module.exports = (options) => {
  const s3Gateway = options.s3Gateway;
  return async (id) => {
    const url = await s3Gateway.getUrl(id, "msg", "xml");
    return url;
  };
};
