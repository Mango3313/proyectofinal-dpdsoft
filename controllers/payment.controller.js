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
    res.status(201).send();
  },

  applyDiscount: function (req, res) {
    //debera de restar una cantidad a cada precio en payment-generated.txt
    var { qyt } = req.body;

    //console.log(qyt);

    var lineReader = require("readline").createInterface({
      input: require("fs").createReadStream(PAYMENT_FILE_PATH),
    });
    var newFile = "";
    lineReader.on("line", function (line) {
      var orPrice = Number(line);
      var newPrice = (orPrice - qyt).toFixed(2);
      fs.readFile(PAYMENT_FILE_PATH, 'utf8', function(err, data) {
        let re = new RegExp('^.*' + line + '.*$', 'gm');
        let formatted = data.replace(re, ''+newPrice+LINE_ENDING);
        fs.writeFile(PAYMENT_FILE_PATH,formatted,(err, file)=>{
          if(err) console.log(err);
        });
    });
   });

    res.json({ message: "File updated succesfully!" });
  },

  getPromos: function (req, res) {
    var response = [
      { name: "BUENFIN" },
      { name: "HOTSALE" },
      { name: "CYBERMONDAY" },
      { name: "BLACKFRIDAY" },
      { name: "PRIMEDAY" },
    ]
    res.json(response);
  },
};
