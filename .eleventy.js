module.exports = function(eleventyConfig) {
  // Copy both CSS files to the output
  eleventyConfig.addPassthroughCopy({ "_includes/tufte.css": "css/tufte.css" });
  eleventyConfig.addPassthroughCopy({ "_includes/custom.css": "css/custom.css" });
  
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md")
      .sort((a, b) => b.date - a.date);
  });
  
  return {
    dir: {
      input: "src",
      includes: "../_includes",
      data: "../_data",
      output: "_site"
    }
  };
};