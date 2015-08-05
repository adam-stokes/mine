/* global it describe */
"use strict";

import * as chai from "chai";
import Spec from "./spec";
import Mine from "./";

describe("Spec Runner", () => {
  it("should return proper title", () => {
    let specEx = new Spec("A title", "02_node_modules", []);
    chai.expect(specEx.title)
      .to.equal("A title");
  });
  it("should throw exception in failed command", () => {
    let specEx = new Spec("A title", "02_node_modules", ["exit 1"]);
    chai.expect(specEx.run.bind(specEx))
      .to.throw(/Problem running/);
  });
  it("should pass gracefully on success command", () => {
    let scripts = ["echo Hi there"];
    let specEx = new Spec("A title", "02_node_modules", scripts);
    chai.expect(specEx.run.bind(specEx))
      .to.not.throw();
  });
});

describe("Mine class", () =>{
    it("should contain list of specs", ()=>{
        let spec = new Spec("New spec runner", "02_node_modules", ["exit 0"]);
        let m = new Mine();
        m.addSpec(spec);
        chai.expect(m.specs).to.have.length(1);
    });
});
