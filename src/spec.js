"use strict";

import * as shell from "shelljs";

export default class Spec{
    constructor(title, deps, scripts){
        this._title = title;
        this.deps = deps;
        this.scripts = scripts;
    }
    get title(){
        return `${this._title}`;
    }

    run(){
        this.scripts.forEach(s => {
            let res = shell.exec(s, {silent: true});
            if(res.code > 0){
                throw Error(`Problem running ${s}: ${res.output}`);
            }
        });
    }
}
