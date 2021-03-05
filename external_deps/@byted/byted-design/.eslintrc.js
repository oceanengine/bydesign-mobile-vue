module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true
    },
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module"
    },
    "rules": {
        "valid-jsdoc": 0,
        "require-jsdoc": 0,
        "max-len": [0, {
            "code": 120
        }],
        "no-invalid-this": 0,
    },
    "plugins": [
        "vue"
    ],
    "extends": ["google", "plugin:vue/recommended"],
};
