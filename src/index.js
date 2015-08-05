"use strict";

require("babel/polyfill");

export default class Mine {
    constructor(){
        this.specs = [];
        this.completed = [];
    }
    run() {
        this.specs.forEach(s => {
            s.run();
        });
    }
    isDone(spec){
        console.log(`Checking: ${spec}`);
    }
    addSpec(spec){
        this.specs.push(spec);
    }
}
