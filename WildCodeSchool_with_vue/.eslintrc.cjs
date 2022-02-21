/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  // CSS: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //       @import "./src/scss/_variables.scss";
  //       @import "./src/scss/_mixins.scss";
  //       `,
  //     },
  //   }, 
  // },
};
