const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // ── Markdown-Filter für YAML-Inhalte ─────────────────────────
  const md = new markdownIt({ html: true, breaks: true });
  eleventyConfig.addFilter("md", (content) => content ? md.render(content) : "");

  // ── Statische Ordner passthrough ──────────────────────────────
  eleventyConfig.addPassthroughCopy({ "css":   "css"   });
  eleventyConfig.addPassthroughCopy({ "img":   "img"   });
  eleventyConfig.addPassthroughCopy({ "pdf":   "pdf"   });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  return {
    templateFormats:     ["njk", "html"],
    htmlTemplateEngine:  "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input:    "src",
      output:   "_site",
      includes: "_includes",
      data:     "_data",
    },
  };
};
