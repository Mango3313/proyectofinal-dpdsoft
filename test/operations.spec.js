const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
const should = chai.should();
const sinon = require("sinon");
const { Request, Response } = require("./mock");
const utils = require("./utils");
const { uniq } = require("lodash");
const Promise = require("bluebird");
const shipment = require("../controllers/shipment.controller");

chai.use(chaiHttp);

describe("Operations test", () => {
  let req, res, next, agent;

  it("Should perform sum", (done) => {
    var minimum = -50;
    var maximum = 50;
    var A = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var B = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    chai
      .request(server)
      .get("/operations/sum?A="+A+"&B="+B)
      .then((shipment) => {
        shipment.body.result.should.eql(Number(A) + Number(B));
        done();
      });
  });

  it("Should perform substract", (done) => {
    var minimum = -50;
    var maximum = 50;
    var A = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var B = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    chai
      .request(server)
      .get("/operations/substract?A="+A+"&B="+B)
      .then((shipment) => {
        shipment.body.result.should.eql(Number(A) - Number(B));
        done();
      });
  });
  it("Should perform multiply", (done) => {
    var minimum = -50;
    var maximum = 50;
    var A = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var B = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    chai
      .request(server)
      .get("/operations/multiply?A="+A+"&B="+B)
      .then((shipment) => {
        shipment.body.result.should.eql(Number(A) * Number(B));
        done();
      });
  });
  it("Should perform divide", (done) => {
    var minimum = -50;
    var maximum = 50;
    var A = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var B = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    chai

      .request(server)
      .get("/operations/divide?A="+A+"&B="+B)
      .then((operations) => {
        operations.body.result.should.eql(Number(A) / Number(B));
        done();
      });
  });
  it("Should perform divide", (done) => {
    var minimum = -50;
    var maximum = 50;
    var A = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var B = 0;
    chai

      .request(server)
      .get("/operations/divide?A="+A+"&B="+B)
      .then((operations) => {
        operations.body.error.should.not.eql(undefined);
        done();
      });
  });
});
