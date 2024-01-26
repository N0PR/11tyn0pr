module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/main.css');
    eleventyConfig.addPassthroughCopy('./src/img');
    eleventyConfig.addPassthroughCopy('./src/main.js');
    eleventyConfig.addPassthroughCopy('./src/sitemap.xml');
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/newsletters');
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}