# babel-presets-htoooth

Setting `babel` in my way.

## usage


```js

// babel.config.js
module.exports = {
  presets: ['htoooth']
};

// if all is true, add all proposal plugins
module.exports = {
  presets: [
    ['htoooth', {
      all: true,
      targets: {}, // same as @babel/env targets
      useBuiltIns: "usage (default) | entry"
    }]
  ]
};

```

if `all` is false (default), will load plugins:

```js
const defaultPlugins = [
  "@babel/plugin-transform-runtime",
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-syntax-import-meta",
  "@babel/plugin-proposal-export-namespace-from",
  "@babel/plugin-proposal-export-default-from",
];

```

And if `all` is `true`, will load plugins additionally:

```js
const extPlugins = [
  "@babel/plugin-proposal-function-bind",
  "@babel/plugin-proposal-logical-assignment-operators",
  ["@babel/plugin-proposal-optional-chaining", { "loose": false }],
  ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
  ["@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false }],
  "@babel/plugin-proposal-do-expressions",
  ["@babel/plugin-proposal-decorators", { "legacy": true }],
  "@babel/plugin-proposal-function-sent",
  "@babel/plugin-proposal-numeric-separator",
  "@babel/plugin-proposal-throw-expressions",
  ["@babel/plugin-proposal-class-properties", { "loose": false }]
]

```

## example

You can find examples in [this repo](https://github.com/htoooth/babel-preset-htoooth-test).