export const requireStore = require.context(
  // Relative path base stores dir
  './',
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match store filenames
  /(?<!all-stores)(?<!root)(?<!index)\.(js)$/,
);

requireStore.keys().forEach((fileName) => {
  // require store body
  requireStore(fileName);
});
