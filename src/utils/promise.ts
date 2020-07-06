type RequestFn<T> = () => Promise<T>;
/**
 * @description 批量请求处理
 * @param requestFns {Array<Function>} 待请求异步函数
 * @param maxNum {Number} 最大并发数
 * @return 所有请求完成后，结果按照请求顺序依次返回（无论是否 reject），所有请求均失败才返回 reject
 */
export function multiRequest<T>(requestFns: Array<RequestFn<T>>, maxNum = 5): Promise<Array<T>> {
  return new Promise((resolve, reject) => {
    const tasks: Array<RequestFn<T>> = requestFns.filter(item => !!item); // 函数式编程、不影响元数据
    const queue: Array<Promise<T>> = [];
    const taskResults: Array<T> = [];
    let i = 0;
    let hasSuccess = false;

    const done = function () {
      // 可能存在部分请求未结束
      if (queue.length) return;

      if (hasSuccess) {
        resolve(taskResults);
      } else {
        reject(taskResults);
      }
    };

    const next = function () {
      if (tasks.length < 1) {
        return done();
      }

      const index = i++;
      const request = (tasks.shift() as RequestFn<T>)()
      request
        .then(data => {
          hasSuccess = true;
          taskResults[index] = data;
        }, error => {
          taskResults[index] = error;
        })
        .finally(() => {
          queue.splice(queue.indexOf(request), 1);
          next();
        })
      queue.push(request);

      // 未达到最大限制，则继续添加
      if (queue.length < maxNum) {
        next();
      }
    };

    next();
  });
}
