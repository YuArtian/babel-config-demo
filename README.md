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
> 介绍 https://babeljs.io/docs/en/presets/
preset 就是各种插件的集合，如最常用的 babel-preset (https://babeljs.io/docs/en/babel-preset-env)

### babel-preset
> 原理分析：https://blog.csdn.net/vv_bug/article/details/107052867
> https://babeljs.io/docs/en/babel-preset-env

可以根据 Browserslist 的配置（通过 .browserslistrc/package.json/babel-preset配置target 配置）
自动按需引入各种插件，完成语法转换

#### `useBuiltIns`
> https://babel.dev/docs/en/babel-preset-env#usebuiltins

- `usage`
  不需要手动 import "core-js";
  根据 browserslist + 业务代码使用到的新 API 按需自动加上 polyfill
- `entry`
  需要手动 import "core-js";
  根据 browserslist 中浏览器版本的支持，将 polyfill 拆分引入浏览器不支持的 polyfill。这样会导致实际用不到的 polyfill 也会被打包到输出文件，导致文件比较大
- `false`
  不启用 polyfill
  如果 import "core-js"; 会无视 browserslist 将所有的 polyfill 加载进来

使用 usage 或 entry 时，需要额外安装 core-js。babel-preset 提供 corejs 选项，可以配置 core-js 版本，默认是 2.0

#### `corejs`
如上
#### `targets`
配置目标环境
#### `exclude`
优化项，一般配置为 `exclude: ['node_modules']`

#### `modules`
将 ES 模块转换为配置的值 ("amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false, defaults to "auto")
设置为 false 将不转换 ES 引入(import语法)
一般不需要更改默认值 auto，即使使用打包工具，babel 是可以从 webpack loader 或者 rollup-plugin 中接受到相应的配置


## plugin
> https://babeljs.io/docs/en/plugins

babel 能完成代码转义是依靠各种 plugin
比如，想要转义箭头函数，需要引入 `@babel/plugin-transform-arrow-functions`，并配置在 plugins 里
如果使用了 `@babel/preset-env` 将会根据配置的目标环境来自动引入 plugins，完成相应的代码转义功能

babel plugin 并不是只能转义代码，可以有更多的功能
### @babel/plugin-transform-runtime
可以帮助抽离 babel 引入的 helper 函数，优化代码体积

