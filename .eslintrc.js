module.exports = {
    root: true,

    env: {
        browser: true,
        node: true,
    },

    parser: "@typescript-eslint/parser",

    parserOptions: {
        ecmaVersion: "es2016",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            impliedStrict: true,
        },
        tsconfigRootDir: "./",
        project: ["./tsconfig.json"],
    },

    settings: {
        "import/resolver": {
            typescript: {},
        },
    },

    plugins: ["react", "@typescript-eslint", "import", "prettier"],

    extends: [
        "eslint:recommended",
        "plugin:eslint-comments/recommended",

        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",

        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",

        "plugin:prettier/recommended",
        "prettier",
    ],

    rules: {
        "import/no-named-as-default-member": "off",
        "function-call-argument-newline": ["error", "consistent"],
        "@typescript-eslint/no-explicit-any": "off",
        "import/no-named-as-default": "off",
        "no-unused-vars": ["off"],
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/no-var-requires": "off",
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react-hooks/exhaustive-deps": "off",
        "react/jsx-max-props-per-line": [
            "error",
            {
                maximum: 1,
                when: "always",
            },
        ],
        "comma-dangle": ["error", "always-multiline"],
        "object-curly-newline": [
            "error",
            {
                ObjectExpression: { multiline: true, minProperties: 1 },
                ObjectPattern: { multiline: true },
            },
        ],
    },
};
