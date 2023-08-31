module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "indent": ["warn", 2],
    "arrow-spacing": ["warn", { "before": true, "after": true }],
    "comma-spacing": ["warn", { "before": false, "after": true }],
    "key-spacing": ["warn", { "beforeColon": false, "afterColon": true }]
  },
}
