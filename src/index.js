import { declare } from "@babel/helper-plugin-utils";

const presets = [
  ["@babel/env", {
    targets: {
      browsers: ["> 1%", "last 2 versions", "not ie <= 8"]
    },
    useBuiltIns: "usage"
  }]
];

const overrides = [{
  test: [],
  presets: []
}];

const defaultPlugins = [
  ["@babel/plugin-transform-runtime", { useESModules: true}],
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-syntax-import-meta",
  "@babel/plugin-proposal-export-namespace-from",
  "@babel/plugin-proposal-export-default-from",
];

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
];

export default declare((api, opts) => {
  api.assertVersion(7);

  let plugins = defaultPlugins;
  
  if ('corejs' in opts) {
    defaultPlugins[0][1].corejs = opts.corejs;
  }

  if ('all' in opts) {
    plugins = [...defaultPlugins, ...extPlugins];
  }

  if ('targets' in opts) {
    presets[0][1].targets = opts.targets;
  }

  if ('useBuiltIns' in opts) {
    presets[0][1].useBuiltIns = opts.useBuiltIns;
  }

  if ('modules' in opts) {
    presets[0][1].modules = opts.modules;
  }

  if ('useESModules' in opts) {
    presets[0][1].useESModules = opts.useESModules;
  }

  return {
    presets,
    overrides,
    plugins
  };
});