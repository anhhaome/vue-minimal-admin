const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addVariant }) {
  addVariant("mactive", "&[active]");
  addVariant("group-mactive", ":merge(.group)[active] &");
});