const defaultSourceExts = require('metro-config/src/defaults/defaults')
  .sourceExts;

const sourceExts =
  process.env.RN_FLAVOR === 'e2e'
    ? ['e2e.js'].concat(defaultSourceExts)
    : defaultSourceExts;

console.log({ RN_FLAVOR: process.env.RN_FLAVOR, sourceExts });

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts,
  },
};
