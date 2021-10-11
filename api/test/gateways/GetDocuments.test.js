const { iteratee } = require("lodash");
const getDocuments = require("../../lib/Gateways/GetDocument");

const mockDocument = [
  {
    date: "2010-02-03T20:30:14.000Z",
  },
];

describe("getDocument", () => {
  const id = "123";
  const type = "txt";

  it("returns an empty message when connection is not established", async () => {
    const documents = getDocuments();
    let result = await documents.execute(id, type);
    expect(result).toEqual('403 - \"<html>\\r\\n<head><title>403 Forbidden</title></head>\\r\\n<body>\\r\\n<center><h1>403 Forbidden</h1></center>\\r\\n<hr><center>Microsoft-Azure-Application-Gateway/v2</center>\\r\\n</body>\\r\\n</html>\\r\\n\"');
  });
});
