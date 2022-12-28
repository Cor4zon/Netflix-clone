module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  validate: [ "javascript", "javascriptreact", "html", "typescriptreact" ],
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'config-airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
};
