"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./dist/cjs/index.prod.js");
} else {
  module.exports = require("./dist/cjs/index.dev.js");
}
