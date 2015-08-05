"use strict";

require("babel/polyfill");

export default class Mine {
    constructor(){
        this.specs = [];
        this.completed = [];
    }
    run() {
        console.log("Processing: %s", this.specs);
    }
    isDone(spec){
        console.log(`Checking: ${spec}`);
    }
}
