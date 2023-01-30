// 1
// 只有 @babel/preset-env
// 只转换syntax（class，typeof，箭头函数），不转换api（map，includes）
// syntax的转换策略会根据浏览器策略（.browserslistrc文件的配置）改变

/* const config = {
  "presets": [
    [
      "@babel/preset-env"
    ]
  ]
} */

/**
 * 2
 * @babel/preset-env + core-js@3
 * yarn add core-js
 * 转换 syntax 和 api
 * syntax 和 api 的转换策略会根据浏览器策略改变
 * polyfill 从core-js@3 引入
 */
/* const config = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3
      }
    ]
  ]
} */

/**
 * 3
 * @babel/preset-env +
 */
/* const config = {
  presets: [
    [
      "@babel/preset-env",
    ]
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        // "corejs": 3,
        "corejs": false,
        "helpers": true, // 提取 helpers
        "regenerator": false
      }
    ]
  ]
} */
/**
 * 4
 * 只有 @babel/plugin-transform-runtime
 */
/* const config = {
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        // "corejs": 3,
        "corejs": false,
        "helpers": true, // 提取 helpers
      }
    ]
  ]
} */
/**
 * 5
 *
 */
/* const config = {
  plugins: [
    ["@babel/plugin-transform-arrow-functions"],
    [
      "@babel/plugin-transform-runtime",
      {
        // "corejs": 3,
        "corejs": false,
        "helpers": true, // 提取 helpers
      }
    ]
  ]
} */

/**
 * 6
 *
 */
// const config = {
//   presets: [
//     [
//       "@babel/preset-env",
//       {
//         // useBuiltIns: "usage",
//         // corejs: 3
//       }
//     ]
//   ],
//   plugins: [
//     [
//       "@babel/plugin-transform-runtime",
//       {
//         corejs: 3,
//         helpers: true,
//       }
//     ]
//   ]
// }
/**
 * 7
 */
const config = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        // useBuiltIns: "usage",
        // corejs: {
        //   "version": 3,
        //   "proposals": true
        // }
        corejs: 3
      }
    ]
  ],
  plugins: [
    // [
    //   "@babel/plugin-transform-runtime",
    //   {
    //     corejs: false,
    //   }
    // ]
  ]
}


export default config