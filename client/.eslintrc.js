module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: `${__dirname}/tsconfig.json`,
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
  },
  ignorePatterns: ['.eslintrc.js', 'node_modules/', 'build/'],
};