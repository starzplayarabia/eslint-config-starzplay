module.exports = {
    extends: "airbnb-base",
    rules: {
        "indent": ["error", 4],
        "comma-dangle": "off", // Not to require a comma after the last line of JSON
        "prefer-template": "error", // Template string rather than string concatenation
        "max-params": ["error", 5], // To enforce config objects instead of long argument list
        "max-statements": ["error", 75], // Function should have 75 statements at most
        "max-len": ["error", 120] // Max line length
    }
};