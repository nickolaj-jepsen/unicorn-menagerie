module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "@typescript-eslint",
    "react-hooks",
    "simple-import-sort",
    "prettier",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/ignore": ["node_modules"],
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },

  rules: {
    "no-prototype-builtins": 0,
    "no-console": [
      2,
      {
        allow: ["error"],
      },
    ],
    curly: 2,
    "guard-for-in": 2,
    eqeqeq: 2,
    "default-param-last": 2,
    "no-caller": 2,
    "no-constructor-return": 2,
    "no-div-regex": 2,
    "no-eval": 2,
    "no-extra-bind": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 0,
    "no-proto": 2,
    "no-return-await": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-useless-call": 2,
    "no-useless-catch": 2,
    "no-useless-concat": 2,
    "no-useless-escape": 2,
    "no-useless-return": 2,
    "no-with": 2,
    radix: 2,
    "prefer-promise-reject-errors": 2,
    "require-await": 2,
    yoda: 2,
    "no-shadow-restricted-names": 2,
    "no-bitwise": 2,
    "no-unneeded-ternary": 2,
    "prefer-exponentiation-operator": 2,
    "prefer-object-spread": 2,
    "sort-vars": 2,
    "no-useless-constructor": 0,
    // Doesn't work with typescript constructors
    "prefer-numeric-literals": 2,
    "prefer-template": 2,
    "prettier/prettier": 2,
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/jsx-key": [
      2,
      {
        checkFragmentShorthand: true,
      },
    ],
    "react/jsx-no-useless-fragment": [
      2,
      {
        allowExpressions: true,
      },
    ],
    "react/display-name": 0,
    "react/prop-types": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/indent": 0,
    // Use prettier to manage indentation
    "@typescript-eslint/naming-convention": [
      2,
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      2,
      {
        variables: false,
      },
    ],
    "@typescript-eslint/no-non-null-assertion": 2,
    "@typescript-eslint/prefer-optional-chain": 2,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": [
      2,
      {
        additionalHooks: "(useChangeEffect|useDebouncedEffect)",
      },
    ],
    "simple-import-sort/imports": 2,
    // In a dream world, we should enable this rule, but currently we have to much "IO" what uses undefined
    "react/jsx-uses-react": 0,
    // Not used in React 17
    "react/react-in-jsx-scope": 0,
    // Not used in React 17
    "react/jsx-fragments": 2,
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
  },
};
