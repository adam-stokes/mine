"use strict";

import Promise from "bluebird";
import shell from "shelljs";

export default class Spec {
  constructor(title, deps, scripts) {
    this._title = title;
    this.scripts = scripts;
  }
  get title() {
    return `${this._title}`;
  }

  run() {
    return Promise.resolve(Promise.map(this.scripts, s => {
      var res = shell.exec(s, {
          silent: true
      });
      if (res.code > 0 ){
          throw Error(`Problem running: ${s}`);
      }
    }));
  }
}
