module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "react/prefer-stateless-function": [0],
        "react/jsx-curly-spacing": [2, "always"],
        "class-methods-use-this": [2, "always"],
    }
};
