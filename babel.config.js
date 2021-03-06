const presets = [
  ["@babel/env"]
];

const overrides = [{
  test: [],
  presets: []
}];

const plugins = [
  // "@babel/plugin-transform-runtime",
  // "@babel/plugin-syntax-dynamic-import",
  // "@babel/plugin-syntax-import-meta",
  // "@babel/plugin-proposal-export-namespace-from",
  // "@babel/plugin-proposal-export-default-from",

  // "@babel/plugin-proposal-function-bind",
  // "@babel/plugin-proposal-logical-assignment-operators",
  // ["@babel/plugin-proposal-optional-chaining", { "loose": false }],
  // ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
  // ["@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false }],
  // "@babel/plugin-proposal-do-expressions",
  // ["@babel/plugin-proposal-decorators", { "legacy": true }],
  // "@babel/plugin-proposal-function-sent",
  // "@babel/plugin-proposal-numeric-separator",
  // "@babel/plugin-proposal-throw-expressions",
  // ["@babel/plugin-proposal-class-properties", { "loose": false }]
]

module.exports = {
  presets,
  overrides,
  plugins
};