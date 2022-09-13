module.exports = {
    trailingComma: "all",
    semi: true,
    printWidth: 100,
    tabWidth: 4,
    endOfLine: "auto",
    bracketSpacing: true,
    singleAttributePerLine: true,
    importOrder: [
        // react (first) and others libraries
        "^react$",
        "<THIRD_PARTY_MODULES>",
        // components
        "(components)|(.tsx$)",
        // pages
        "pages",
        // hooks
        "(hooks)|(^use)",
        // helper functions
        "utils",
        // app consts
        "consts",
        // state management logic
        "store",
        // requests
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
