module.exports = (options) => {
  const s3Gateway = options.s3Gateway;
  const id = "27810857";
  return async () => {
    const url = await s3Gateway.getUrl(id);
    return url;
  };
};
