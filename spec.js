"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _shelljs = require("shelljs");

var _shelljs2 = _interopRequireDefault(_shelljs);

var Spec = (function () {
  function Spec(title, deps, scripts) {
    _classCallCheck(this, Spec);

    this._title = title;
    this.scripts = scripts;
  }

  _createClass(Spec, [{
    key: "run",
    value: function run() {
      return _bluebird2["default"].resolve(_bluebird2["default"].map(this.scripts, function (s) {
        var res = _shelljs2["default"].exec(s, {
          silent: true
        });
        if (res.code > 0) {
          throw Error("Problem running: " + s);
        }
      }));
    }
  }, {
    key: "title",
    get: function get() {
      return "" + this._title;
    }
  }]);

  return Spec;
})();

exports["default"] = Spec;
module.exports = exports["default"];