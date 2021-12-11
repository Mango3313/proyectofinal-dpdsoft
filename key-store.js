const VALID_KEYS_PATH = './valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;


module.exports = function (req, res) {  
    try{
        const apiKey = shortid.generate();
        var stream = fs.createWriteStream(VALID_KEYS_PATH, {flags:'a'});
        stream.write(apiKey + LINE_ENDING);
        stream.end();
        return res.status(201).send({ apiKey });
    }catch(error){
        return res.status(404).send({ error:"Something went bad :c /n "+error });
    }
    
    //console.log(fd);
    //fs.appendFileSync(fd, apiKey + LINE_ENDING, 'utf8');
};

