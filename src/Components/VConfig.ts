/**
 * Copyright(c) 2016 calidion <calidion@gmail.com>
 * Apache 2.0 Licensed
 */

import * as fs from 'fs';
import * as _ from 'lodash';
import { Generator } from 'errorable';
import { VBase } from './VBase';

export class VConfig extends VBase {
  defaultPath = 'configs';
  constructor(path = __dirname) {
    super(path)
  }
  isType(item:any):Boolean {
    return item instanceof Object;
  }
}
