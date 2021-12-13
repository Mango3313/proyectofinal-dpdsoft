const faker = require('faker');
//deberas de utilizar faker para generar los datos
module.exports = {
    createShipment: function (req, res) {
        //debera de simular un envio con dirección un precio y una persona con sus datos
        var address = faker.address;
        var person = faker.name;
        var prices = faker.commerce;
        var response = {
            message:"Pedido realizado con exito",
            shipmentData:{
                address: address.direction(),
                price: prices.price(),
                name: person.findName()
            }
        }
        res.status(201).send(response);
    },
    changeStatus: function (req, res) {
        //Debera de retornar una dirección random
        // codigo de respuesta 201
        // data la direcciòn random
        res.status(201).json({address: faker.address.direction()});
    },
};
