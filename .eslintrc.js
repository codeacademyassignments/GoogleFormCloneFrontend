module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": 0,
  },
  "env" : {
    "es6" : true,
    "node":true,
    "jest":true,
    "browser": true
  },
};