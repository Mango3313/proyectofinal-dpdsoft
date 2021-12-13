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

describe("payment generation", () => {
  let req, res, next, agent;

  it("Should create shipment information", (done) => {
    chai
      .request(server)
      .get("/shipment/createshipment")
      .then((shipment) => {
        shipment.body.shipmentData.should.not.eql(undefined);
        done();
      });
  });

  it("Should return status 200 or 201 after a request", (done) => {
    chai
      .request(server)
      .get("/shipment/createshipment")
      .then((shipment) => {
        shipment.status.should.match(/^20[0|1]/);
        done();
      });
  });

  it("Should display random direction", (done) => {
    chai
      .request(server)
      .get("/shipment/changestatus")
      .then((shipment) => {
        shipment.body.address.should.not.eql(undefined);
        done();
      });
  });

  it("Should return status 200 or 201 after a request", (done) => {
    chai
      .request(server)
      .get("/shipment/changestatus")
      .then((shipment) => {
        shipment.status.should.match(/^20[0|1]/);
        done();
      });
  });
});
