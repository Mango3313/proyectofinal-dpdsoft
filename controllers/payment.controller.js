const path = require("path");
const PAYMENT_FILE_PATH = path.resolve("./payment-generated.txt");
const faker = require("faker");
const fs = require("fs");
const LINE_ENDING = require("os").EOL;

module.exports = {
  create: function (req, res) {
    var price = faker.commerce.price();
    var stream = fs.createWriteStream(PAYMENT_FILE_PATH, { flags: "a" });
    stream.write(price + LINE_ENDING);
    stream.end();
    res
      .status(201)
      .send({ message: "Precio creado correctamente", price: price });
  },

  applyDiscount: function (req, res) {
    //debera de restar una cantidad a cada precio en payment-generated.txt
    var { qyt } = req.body;
    var data = fs.readFileSync(PAYMENT_FILE_PATH);
    var arrayOfPrices = data.toString().trim().split(LINE_ENDING);
    var jsonRes = [];
    var newText = "";
    arrayOfPrices.forEach((val, i, ar) => {
      var newPrice = Number(val) - Number(qyt);
      jsonRes.push((Object.price = newPrice));
      newText += newPrice + LINE_ENDING;
    });
    var stream = fs.createWriteStream(PAYMENT_FILE_PATH, { flags: "w" });
    stream.write(newText);
    stream.end();
    res.json({ message: "File updated succesfully!", resData: jsonRes });
  },

  getPromos: function (req, res) {
    var response = [
      { name: "BUENFIN" },
      { name: "HOTSALE" },
      { name: "CYBERMONDAY" },
      { name: "BLACKFRIDAY" },
      { name: "PRIMEDAY" },
    ];
    res.json(response);
  },
};
