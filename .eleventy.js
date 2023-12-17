module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/main.css');
    eleventyConfig.addPassthroughCopy('./src/img');
    eleventyConfig.addPassthroughCopy('./src/main.js');
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}