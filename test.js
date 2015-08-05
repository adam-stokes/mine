/* global it describe */
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require("chai-as-promised");

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _spec = require("./spec");

var _spec2 = _interopRequireDefault(_spec);

var _ = require("./");

var _2 = _interopRequireDefault(_);

_chai2["default"].use(_chaiAsPromised2["default"]);
_chai2["default"].should();

describe("Spec Runner", function () {
  it("should return proper title", function () {
    var specEx = new _spec2["default"]("A title", "02_node_modules", []);
    (0, _chai.expect)(specEx.title).to.equal("A title");
  });
  it("should throw exception in failed command", function () {
    var specEx = new _spec2["default"]("A title", "02_node_modules", ["exit 1"]);
    specEx.run().should.be.rejectedWith(/Problem running/);
  });
  it("should pass gracefully on success command", function () {
    var scripts = ["echo Hi there"];
    var specEx = new _spec2["default"]("A title", "02_node_modules", scripts);
    specEx.run().should.be.fulfilled;
  });
});

describe("Mine class", function () {
  it("should contain list of specs", function () {
    var spec = new _spec2["default"]("New spec runner", "02_node_modules", ["exit 0"]);
    var m = new _2["default"]();
    m.addSpec(spec);
    (0, _chai.expect)(m.specs).to.have.length(1);
  });
});