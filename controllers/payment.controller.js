const path = require("path");
const PAYMENT_FILE_PATH = path.resolve("./payment_generated.txt");
const faker = require("faker");
const fs = require("fs");
const LINE_ENDING = require("os").EOL;

module.exports = {
  create: function (req, res) {
    var price = faker.commerce.price();
    var stream = fs.createWriteStream(PAYMENT_FILE_PATH, { flags: "a" });
    stream.write(price + LINE_ENDING);
    stream.end();
    res.status(201).send();
  },

  applyDiscount: function (req, res) {
    //debera de restar una cantidad a cada precio en payment-generated.txt
    var qty = 20;

    var lineReader = require("readline").createInterface({
      input: require("fs").createReadStream("file.in"),
    });

    lineReader.on("line", function (line) {
        var orPrice = Number(line);
        var newPrice = orPrice - qty;
      var result = line.replace(/%line%/g,""+newPrice);
      fs.writeFile(PAYMENT_FILE_PATH, result, "utf8", function (err) {
        if (err) return console.log(err);
      });
    });

    res.json({ message: "" });
  },

  getPromos: function (req, res) {
    res.json([
      { name: "BUENFIN" },
      { name: "HOTSALE" },
      { name: "CYBERMONDAY" },
      { name: "BLACKFRIDAY" },
      { name: "PRIMEDAY" },
    ]);
  },
};
