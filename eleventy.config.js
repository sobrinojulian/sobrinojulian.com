const yaml = require('js-yaml')
const beautify = require('js-beautify')
const { DateTime } = require('luxon')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')

const OUTPUT_DIRECTORY = '_site'

module.exports = function (eleventyConfig) {
  // Copy
  eleventyConfig.addPassthroughCopy({ public: '/' })

  // Plugins
  eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents))
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

  // Filters
  eleventyConfig.addFilter('ISODate', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toISODate()
  })

  // Transforms
  eleventyConfig.addTransform('prettifyHTML', prettifyHTML)

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
