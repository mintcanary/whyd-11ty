module.exports = function(config) {

  // pass some assets right through
  config.addPassthroughCopy("js");
  config.addPassthroughCopy("swf");
  config.addPassthroughCopy("html");

  passthroughFileCopy: true

  pathPrefix: "/whyd-11ty/"
};
