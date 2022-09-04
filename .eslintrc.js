module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: '@aomi',
  rules: {
    '@typescript-eslint/no-unused-vars': ['off'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
