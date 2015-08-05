"use strict";

var Promise = require("bluebird");
var _ = require("lodash");

function Mine() {
  var specs = [];
  var completed = [];
}

/*
 * Run specs
 */
Mine.prototype.run = Promise.method(function() {
  return _.each(this.spec, function(item) {
    console.log("Running: ", item);
  });
});

/*
 * Check completed
 */
Mine.prototype.isDone = Promise.method(function(spec) {
  return _.find(this.completed, spec);
});
