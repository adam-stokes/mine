/* global it describe */
"use strict";

import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);
chai.should();
import Spec from "./spec";
import Mine from "./";

describe("Spec Runner", () => {
  it("should return proper title", () => {
    let specEx = new Spec("A title", "02_node_modules", []);
    expect(specEx.title)
      .to.equal("A title");
  });
  it("should throw exception in failed command", () => {
    let specEx = new Spec("A title", "02_node_modules", ["exit 1"]);
    specEx.run().should.be.rejectedWith(/Problem running/);
  });
  it("should pass gracefully on success command", () => {
    let scripts = ["echo Hi there"];
    let specEx = new Spec("A title", "02_node_modules", scripts);
    specEx.run().should.be.fulfilled;
  });
});

describe("Mine class", () =>{
    it("should contain list of specs", ()=>{
        let spec = new Spec("New spec runner", "02_node_modules", ["exit 0"]);
        let m = new Mine();
        m.addSpec(spec);
        expect(m.specs).to.have.length(1);
    });
});
