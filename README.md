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
- 
- utils 通用方法支持（相关API接口文档待完善）


## commitlint

规定格式：

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

想进一步了解：

- https://commitlint.js.org/#/
- https://juejin.im/entry/5b1539e0e51d4506d0620fed


> 使用时，也可以搭配 [gitmoji](https://github.com/carloscuesta/gitmoji) 填充你的 git commit messgae

> 注意：
>
> commitlint 如果没有生效，请检查 husky 是否正常安装（有可能 git 版本较低，安装失败了）


## 要做的事情

- [x] tslint (目前使用 eslint)
- [ ] 通用 utils 支持 (持续拓展中，后续可以考虑单独抽离出来)
- [ ] 支持 `npx` 快速创建本地项目。（`npx node-ts-start create demo`）
- [x] commitlint git 提交信息检查。
- ...

