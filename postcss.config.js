const purgecss = require("@fullhuman/postcss-purgecss");

const plugins = [];

if (process.env.NODE_ENV === "production") {
  plugins.push(
    purgecss({
      content: [
        "./src/layouts/**/*.vue",
        "./src/components/**/*.vue",
        "./src/pages/**/*.vue",
      ],
      whitelist: ["html", "body"],
      whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
    })
  );
}

module.exports = { plugins };
