const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const app = require("../app").app;

describe("Should be return hello world", () => {
  it("should return 'Hello World!'", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        chai.assert.equal(res.text, "Hello World!");
        done();
      });
  });
});
