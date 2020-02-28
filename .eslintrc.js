module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'plugin:react-native/all',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      "jsx": true
    },
  },
  plugins: ["react", "react-native", "jsx-a11y", "import", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "error",
      { "extensions": [".js", ".jsx"] }
    ],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "react-native/no-color-literals": "off",
    "react-native/sort-styles": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off"
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": { "rootPathSuffix": "src" }
    }
  }
};
