module.exports = {
    env: { browser: true, es2020: true },
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        'plugin:prettier/recommended',
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module", project: ['./tsconfig.json'], },
    plugins: ["react-refresh", "prettier"],
    rules: {
        "react-refresh/only-export-components": "warn",
    },
    ignorePatterns: ['.eslintrc.cjs'],
};
