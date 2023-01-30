# babel-config-demo

> https://zhuanlan.zhihu.com/p/361874935
> https://juejin.cn/post/6975556168752037919#heading-10


如何配置 babel

首先要安装 @babel/core
> @babel/core 是 babel 的核心，负责调用各种转义语法的工具函数

如果需要编译输出 babel 编译好的文件，则需要安装 @babel/cli
这样可以 babel/cli 执行脚本
在 package.json 中添加命令
```
"scripts": {
  "build": "babel index.js --out-dir dist"
},
```

index.js 中写入示例代码，观察 dist 中的编译结果

1. 如果不做任何配置，执行 yarn run build 命令，则输出文件和原始文件没有任何变化

想要将现有代码编译成目标环境可兼容的代码
就需要根据具体场景，组合使用 babel 的各个插件（plugins）和 预设（preset）

## preset（预设）
如最常用的