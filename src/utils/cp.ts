/**
 * @description 子进程相关处理
 */
import * as utils from '../../types/utils'; // 引入声明

import cp from 'child_process';

type resData<T> = utils.resData<T>;
type CpOptions = cp.ExecSyncOptionsWithStringEncoding;

/**
 * @description 执行指定命令
 */
export function cpExec(cmd: string, options?: CpOptions): resData<string>;

export function cpExec(cmd: string, options: CpOptions, isAsync: boolean): Promise<any> | resData<string>;

export function cpExec(cmd: string, options?: CpOptions, isAsync?: boolean): Promise<any> | resData<string> {
  const opts: CpOptions = Object.assign({
    maxBuffer: 4 << 20,
  }, options);
  // 异步处理
  if (isAsync) {
    return new Promise((resolve, reject) => {
      cp.exec(cmd, opts, function (error, stdout) {
        if (error) {
          return reject(error);
        }

        resolve(stdout.toString());
      });
    });
  }
  // 同步处理
  const res: resData<string> = {
    errCode: 0,
    data: '',
  };
  try {
    const data = cp.execSync(cmd, opts);
    res.data = data.toString(); // 将 buffer 转换成 string
  } catch (error) {
    res.errCode = -1;
  }
  return res;
}
