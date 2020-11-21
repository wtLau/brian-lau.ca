module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: '^16.8.2',
    },
  },
  globals: {
    window: true,
    define: true,
    require: true,
    module: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      es6: true,
    },
    sourceType: 'module',
  },
  plugins: ['babel', 'react', 'react-hooks'],
  rules: {
    // indent: ['error', 2],
    // 'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': [2, { when: 'never', allowMultiline: true }],
    'react/jsx-indent-props': [1, 2],
    'react/jsx-no-undef': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-wrap-multilines': 1,
    'react/react-in-jsx-scope': 1,
    'react/prefer-es6-class': 1,
    'react/jsx-no-bind': 1,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
}
