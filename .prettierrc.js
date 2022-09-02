module.exports = {
    semi: true,
    trailingComma: "es5",
    printWidth: 100,
    tabWidth: 4,
    endOfLine: "auto",
    bracketSpacing: true,
    singleAttributePerLine: true,
    importOrder: [
        // react
        "^react$",
        "<THIRD_PARTY_MODULES>",
        // components
        "(components)|(.tsx$)",
        // hooks
        "(hooks)|(^use)",
        "utils",
        "consts",
        "store",
        "api",
        // interfaces & types
        "(interfaces|types)|((^I).)",
        // styles
        ".(scss|css|sass)$",
        // other files
        "^[./]",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
