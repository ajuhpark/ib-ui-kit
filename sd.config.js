const { registerTransforms } = require('@tokens-studio/sd-transforms');

// will register them on StyleDictionary object
// that is installed as a dependency of sd-transforms,
// in most cases this will be npm install deduped with
// your own installation of StyleDictionary,
// thus being the same object
// Alternatively, pass your own SD object into this function as an argument
registerTransforms();

module.exports = {
  source: ['tokens/input.json/'],
  // your SD configuration
};

/**
 * Transform typography shorthands for css variables
 */
StyleDictionary.registerTransform({
  name: "typography/shorthand",
  type: "value",
  transitive: true,
  matcher: (token) => token.type === "typography",
  transformer: (token) => {
    const {fontWeight, fontSize, lineHeight, fontFamily} = token.original.value;
    return `${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`;
  },
});
