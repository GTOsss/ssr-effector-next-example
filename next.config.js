const fs = require('fs');

module.exports = {
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    const target = isServer ? 'server' : 'client';
    console.log(target);
    config.resolve.extensions = [
      ".mjs",
      ".js",
      ".tsx",
      ".ts",
      ".jsx",
      ".json",
      ".wasm"
    ];

    config.module.rules.push({
      test: /\.m?js$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      }
    });

    fs.writeFileSync(`webpack-config-${target}.json`, JSON.stringify(config, null, '  '))

    return config
  },
}
