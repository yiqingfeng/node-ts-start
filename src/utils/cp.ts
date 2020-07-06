/**
 * @description 子进程相关处理
 */
/// <reference> utils.d.ts
import cp from 'child_process';

type CpOptions = cp.ExecSyncOptionsWithStringEncoding;

/**
 * @description 执行指定命令
 */
function cpExec(cmd: string, options?: CpOptions): resData<string>;

function cpExec(cmd: string, options: CpOptions, isAsync: boolean): Promise<any> | resData<string>;

function cpExec(cmd: string, options?: CpOptions, isAsync?: boolean): Promise<any> | resData<string> {
  const opts: CpOptions = Object.assign({
    maxBuffer: 4 << 20,
  }, options);
  // 异步处理
  if (isAsync) {
    return new Promise((resolve, reject) => {
      cp.exec(cmd, opts, function (error, stdout, stderr) {
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

export default {
  cpExec,
}
