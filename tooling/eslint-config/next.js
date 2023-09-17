const rules = require("./utils/rules");

module.exports = {
  extends: [
    "turbo",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    ...[
      '@vercel/style-guide/eslint/browser',
      '@vercel/style-guide/eslint/node',
      '@vercel/style-guide/eslint/react',
      '@vercel/style-guide/eslint/next',
      '@vercel/style-guide/eslint/typescript',
    ].map((config) => require.resolve(config))
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  globals: {
    React: true,
    JSX: true,
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js"],
  root: true,
  ...rules
};
