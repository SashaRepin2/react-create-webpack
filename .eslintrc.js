module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        tsconfigRootDir: "./",
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            typescript: {},
        },
    },
    plugins: ["@typescript-eslint", "import"],
    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:jsx-a11y/recommended",
        "plugin:eslint-comments/recommended",
        "plugin:prettier/recommended",
        "prettier",
    ],
    rules: {
        "no-unused-vars": ["off"],
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/no-var-requires": "off",
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react-hooks/exhaustive-deps": "off",
        "react/jsx-max-props-per-line": ["error", { maximum: 1, when: "always" }],
    },
};
