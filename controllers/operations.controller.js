module.exports = {
    sum: function (req, res) {
        var A = req.query("A");
        var B = req.query("B");
        res.status(201).send({operation: "sum",result: A+B});
    },

    substract: function (req, res) {
        var A = req.query("A");
        var B = req.query("B");
        res.status(201).send({operation: "substract",result: A-B});
    },

    multiply: function (req, res) {
        var A = req.query("A");
        var B = req.query("B");
        res.status(201).send({operation: "multiply",result: A*B});
    },

    divide: function (req, res) {
        var A = req.query("A");
        var B = req.query("B");
        (B === 0) ? res.status(201).send({error: "El denominador no puede ser 0"}) : res.status(201).send({operation: "divide",result: A/B});
    }
};
