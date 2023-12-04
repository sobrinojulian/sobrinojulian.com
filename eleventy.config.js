const yaml = require('js-yaml')
const beautify = require('js-beautify')
const { DateTime } = require('luxon')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')
const timeToRead = require('eleventy-plugin-time-to-read')
// markdown-it
const MarkdownIt = require('markdown-it');
const MarkdownItGitHubAlerts = require('markdown-it-github-alerts');

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
