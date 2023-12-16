module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/main.css');
    eleventyConfig.addPassthroughCopy('./src/img');
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}