// .eleventy.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/styles/style.out.css": "style.css",
    "src/img": "img",
  });
  eleventyConfig.setUseGitIgnore(false);
};