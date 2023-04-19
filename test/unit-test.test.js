const assert = require("assert");

const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../app").app;

function addValue(a, b) {
  return a + b;
}

describe("Test de prueba", () => {
  it("should return 4", () => {
    let va = addValue(2, 2); //funcion a testear
    assert.equal(va, 4); //comparacion
  });
});

describe("Test of Auth", () => {
  it("should return 401 when no jwt token available", (done) => {
    //cuando la llamada no tiene la key correcta

    chai
      .request(app)
      .get("/team")
      .end((err, res) => {
        chai.assert.equal(res.statusCode, 401);
        done();
      });
  });

  it("should return 200 when  jwt token  is valid", (done) => {
    //cuando la llamada no tiene la key correcta
    chai
      .request(app)
      .post("/login")
      .end((err, res) => {
        chai
          .request(app)
          .get("/team")
          .set("Authorization", ` JWT${res.body.token}`)
          .end((err, res) => {
            chai.assert.equal(res.statusCode, 401);
            done();
          });
        done();
      });
  });
});
