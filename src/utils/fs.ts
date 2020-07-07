/**
 * @description 文件相关操作
 */
import * as utils from '../../types/utils'; // 引入声明

import fs from 'fs';
import path from 'path';

type resData<T> = utils.resData<T>;

/**
 * @description 检查指定目录是否存在
 * @param oPath 指定目录
 */
export function checkDir(oPath: string): boolean {
  return fs.existsSync(oPath);
}

/**
 * @description 指定路径是否为目录
 * @param oPath
 */
function isDir(oPath: string): boolean {
  const isExists = checkDir(oPath);

  let isDirectory = false;
  // 同步版本
  if (!isExists) {
    return isDirectory;
  }

  try {
    const stats = fs.statSync(oPath);
    isDirectory = stats.isDirectory();
  } catch (err) {
  }
  return isDirectory;
}

/**
 * @description 删除指定文件夹
 * @param oPath 目标文件夹的路径
 */
export function deleteDir(oPath: string): resData<string> {
  const hasPathExist: boolean = checkDir(oPath);

  const res: resData<string> = {
    errCode: 0,
    data: '',
  };
  if (hasPathExist) {
    try {
      const files: string[] = fs.readdirSync(oPath);
      files.forEach(file => {
        const curPath: string = path.resolve(oPath, file);

        if (isDir(curPath)) {
          deleteDir(curPath);
        } else {
          fs.unlinkSync(curPath); // 删除该文件
        }
      });

      fs.rmdirSync(oPath); // 清除当前文件夹
    } catch (err) {
      console.log(err);
      res.errCode = -1;
    }
  } else {
    res.errCode = 500;
  }
  return res;
}

/**
 * @description 创建指定文件夹
 */
export function mkdir(oPath: string): resData<string> {
  const res = {
    errCode: 0,
    data: '',
  };
  if (isDir(oPath)) {
    return res;
  }

  try {
    fs.mkdirSync(oPath);
  } catch (err) {
    res.errCode = -1;
    res.data = err.toString();
  }

  return res;
}
