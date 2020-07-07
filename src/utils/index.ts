/**
 * @description 通用方法处理
 */
import * as cp from './cp';
import * as promise from './promise';
import * as path from './path';
import * as fs from './fs';

export default {
  ...cp,
  ...promise,
  ...path,
  ...fs,
};
