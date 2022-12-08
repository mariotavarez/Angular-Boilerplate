const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
};
const GENERAL_RULES = {
  complexity: [RULES.ERROR, {
    max: 10
  }],
  'no-console': RULES.ERROR,
  'func-names': RULES.ERROR,
  'no-var': RULES.ERROR,
  'max-params': [RULES.ERROR, {
    max: 3
  }],
  'no-underscore-dangle': RULES.ERROR,
  'no-useless-catch': RULES.ERROR,
  'no-alert': RULES.ERROR,
  'no-debugger': RULES.WARN,
  'no-useless-concat': RULES.ERROR,
  'no-dupe-keys': RULES.ERROR,
  eqeqeq: [RULES.ERROR, 'always'],
  'max-statements': [RULES.ERROR, {
    max: 10
  }],
  'no-extra-semi': RULES.ERROR,
  'no-loop-func': RULES.ERROR,
  'no-multi-assign': RULES.ERROR,
  'no-plusplus': RULES.ERROR,
  'no-dupe-else-if': RULES.ERROR,
  'no-lonely-if': RULES.ERROR,
  'multiline-ternary': [RULES.ERROR, 'always-multiline'],
  'no-else-return': [RULES.ERROR, {
    allowElseIf: true
  }],
  'max-lines-per-function': [RULES.ERROR, {
    max: 200,
    skipBlankLines: true,
    skipComments: true
  }],
  camelcase: [RULES.ERROR, {
    properties: 'always'
  }]
};
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    ...GENERAL_RULES
  }
};