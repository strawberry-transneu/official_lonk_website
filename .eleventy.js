module.exports = async function (eleventyConfig) {
  // import stays compatible with eleventy v3
  const { I18nPlugin } = await import("@11ty/eleventy");

  eleventyConfig.addPlugin(I18nPlugin, {
    defaultLanguage: "en",
    errorMode: "strict",

    filters: {
      url: "locale_url",
      links: "locale_links",
    },
  });


  eleventyConfig.addPassthroughCopy("imgs");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("sounds");



  // Prevent foo.html → foo/index.html
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.setTemplateFormats([
    "html", "njk", "md", "txt", "js", "css", "xml", "json"
  ]);

  return {
    dir: {
      input: "private",
      output: "public",
    },
  };
};
