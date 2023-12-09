const yaml = require('js-yaml')
const beautify = require('js-beautify')
const { DateTime } = require('luxon')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')
const timeToRead = require('eleventy-plugin-time-to-read')
const MarkdownIt = require('markdown-it');
const MarkdownItGitHubAlerts = require('markdown-it-github-alerts');
const fs = require('fs');
const frontMatter = require('front-matter');

const OUTPUT_DIRECTORY = '_site'
const IS_PRODUCTION = process.env.ELEVENTY_RUN_MODE === 'build'

module.exports = function (eleventyConfig) {
  // Copy
  eleventyConfig.addPassthroughCopy({ public: '/' })

  // Plugins
  eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents))
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
  eleventyConfig.addPlugin(timeToRead)

  // Filters
  eleventyConfig.addFilter('ISODate', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toISODate()
  })
  eleventyConfig.addFilter('date', function (value, format) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(value).toLocaleDateString(undefined, options);
  });

  // Return all the tags used in a collection
	eleventyConfig.addFilter("getAllTags", collection => {
		let tagSet = new Set();
		for(let item of collection) {
			(item.data.tags || []).forEach(tag => tagSet.add(tag));
		}
		return Array.from(tagSet);
	});
  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  });

  eleventyConfig.addCollection('projectsByTag', function(collectionApi) {
    const projectsByTag = {};
    const markdownIt = new MarkdownIt(); // Instantiate the markdownIt object

    collectionApi.getAll().forEach((item) => {
      if (item.inputPath.endsWith('.md')) {
        const fileContent = fs.readFileSync(item.inputPath, 'utf8');
        const { attributes: projectAttributes, body: projectContent } = frontMatter(fileContent);
        const project = {
          ...projectAttributes,
          content: markdownIt.render(projectContent), // Use markdownIt
        };

        // Check if project.tags is an array before iterating
        if (Array.isArray(project.tags)) {
          project.tags.forEach((tag) => {
            projectsByTag[tag] = projectsByTag[tag] || [];
            projectsByTag[tag].push(project);
          });
        }
      }
    });

    return projectsByTag;
  });


  // markdown-it
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(MarkdownItGitHubAlerts));

  if (IS_PRODUCTION) {
    // Transforms
    eleventyConfig.addTransform('prettifyHTML', prettifyHTML)
  }

  return {
    dir: {
      input: '_pages',
      output: OUTPUT_DIRECTORY,
      includes: '../_includes',
      data: '../_data'
    }
  }
}

// Transformers
function prettifyHTML(content, outputPath) {
  if (outputPath && outputPath.endsWith('.html')) {
    return beautify.html(content, { indent_size: '2' })
  }
  return content
}
