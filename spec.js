"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _shelljs = require("shelljs");

var shell = _interopRequireWildcard(_shelljs);

var Spec = (function () {
    function Spec(title, deps, scripts) {
        _classCallCheck(this, Spec);

        this._title = title;
        this.deps = deps;
        this.scripts = scripts;
    }

    _createClass(Spec, [{
        key: "run",
        value: function run() {
            this.scripts.forEach(function (s) {
                var res = shell.exec(s, { silent: true });
                if (res.code > 0) {
                    throw Error("Problem running " + s + ": " + res.output);
                }
            });
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