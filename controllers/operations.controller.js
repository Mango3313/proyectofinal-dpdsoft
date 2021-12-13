module.exports = {
  sum: function (req, res) {
    var A = req.query.A;
    var B = req.query.B;

    isNaN(A) || isNaN(B)
      ? res.status(201).send({ error: "Uno de los parametros no es numero" })
      : res
          .status(201)
          .send({ operation: "sum", result: Number(A) + Number(B) });
  },

  substract: function (req, res) {
    var A = Number(req.query.A);
    var B = Number(req.query.B);
    isNaN(A) || isNaN(B)
      ? res.status(201).send({ error: "Uno de los parametros no es numero" })
      : res
          .status(201)
          .send({ operation: "substract", result: Number(A) - Number(B) });
  },

  multiply: function (req, res) {
    var A = Number(req.query.A);
    var B = Number(req.query.B);
    isNaN(A) || isNaN(B)
      ? res.status(201).send({ error: "Uno de los parametros no es numero" })
      : res
          .status(201)
          .send({ operation: "multiply", result: Number(A) * Number(B) });
  },

  divide: function (req, res) {
    var A = Number(req.query.A);
    var B = Number(req.query.B);
    isNaN(A) || isNaN(B)
      ? res.status(201).send({ error: "Uno de los parametros no es numero" })
      : B === 0
      ? res.status(201).send({ error: "El denominador no puede ser 0" })
      : res
          .status(201)
          .send({ operation: "divide", result: Number(A) / Number(B) });
  },
};
