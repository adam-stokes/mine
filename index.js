"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require("babel/polyfill");

var Mine = (function () {
    function Mine() {
        _classCallCheck(this, Mine);

        this.specs = [];
        this.completed = [];
    }

    _createClass(Mine, [{
        key: "run",
        value: function run() {
            console.log("Processing: %s", this.specs);
        }
    }, {
        key: "isDone",
        value: function isDone(spec) {
            console.log("Checking: " + spec);
        }
    }]);

    return Mine;
})();

exports["default"] = Mine;
module.exports = exports["default"];