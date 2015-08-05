/* global it describe */
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _chai = require("chai");

var chai = _interopRequireWildcard(_chai);

var _spec = require("./spec");

var _spec2 = _interopRequireDefault(_spec);

var _ = require("./");

var _2 = _interopRequireDefault(_);

describe("Spec Runner", function () {
  it("should return proper title", function () {
    var specEx = new _spec2["default"]("A title", "02_node_modules", []);
    chai.expect(specEx.title).to.equal("A title");
  });
  it("should throw exception in failed command", function () {
    var specEx = new _spec2["default"]("A title", "02_node_modules", ["exit 1"]);
    chai.expect(specEx.run.bind(specEx)).to["throw"](/Problem running/);
  });
  it("should pass gracefully on success command", function () {
    var scripts = ["echo Hi there"];
    var specEx = new _spec2["default"]("A title", "02_node_modules", scripts);
    chai.expect(specEx.run.bind(specEx)).to.not["throw"]();
  });
});

describe("Mine class", function () {
  it("should contain list of specs", function () {
    var spec = new _spec2["default"]("New spec runner", "02_node_modules", ["exit 0"]);
    var m = new _2["default"]();
    m.addSpec(spec);
    chai.expect(m.specs).to.have.length(1);
  });
});