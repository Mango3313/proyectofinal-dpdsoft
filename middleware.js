const fs = require("fs");
const VALID_KEYS_PATH = "./valid-keys.txt";
const utils = require("./test/utils");

module.exports = async function (req, res, next) {
  try {
    const keys = await utils.getKeysFromFile();
    const xApiKey = req.headers["x-api-key"];
    if (!xApiKey) return res.status(401).send({ message: "No auth" });
    if (keys.includes(xApiKey)) return next();
    return res.status(401).send({ message: "Forbidden" });
  } catch (error) {
    console.error(error);
    return res.status(401).send({
      error: "keys-notfound",
    });
  }
};
