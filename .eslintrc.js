module.exports = {
    root: true,
    extends: ["universe/native"],
    ignorePatterns: [".config/*"],
    rules: {
        "react-hooks/exhaustive-deps": "error",
        "@typescript-eslint/no-unused-vars": "error",
        indent: ["error", 4],
        "no-console": "error",
        "arrow-body-style": ["error", "as-needed"],
        "@typescript-eslint/no-empty-function": "off",
        "import/prefer-default-export": "off",
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "internal", ["sibling", "parent"]],
                pathGroups: [
                    {
                        pattern: "./HomeStyles",
                        group: "internal",
                    },
                ],
                pathGroupsExcludedImportTypes: ["react"],
                "newlines-between": "always",
            },
        ],
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
};
