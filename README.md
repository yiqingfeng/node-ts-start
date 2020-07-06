# node-ts-start

提供一个 node + typescript 脚手架

## 使用说明

直接 clone 该项目，进行属于你自己的开发。

```bash
git clone https://github.com/yiqingfeng/node-ts-start

npm install

npm run dev
```

## 支持的特性

- node + ts + eslint 开发
- vscode 快启动开发
- commitlint git 提交信息检查
- utils 通用方法支持（相关API接口文档待完善）


## commitlint

规定格式：

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```



## 要做的事情

- [x] tslint
- [ ] 通用 utils 支持 (持续拓展中，后续可以考虑单独抽离出来)
- 支持 `npx` 快速创建本地项目。（`npx node-ts-start create demo`）
- ...