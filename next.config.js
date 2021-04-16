const path = require('path');
const fs = require('fs');

const nextConfig = {
  webpack: (config, {isServer}) => {
    // todo 1 Переопределние импорта должно работать, это важно в next js
    // config.resolve.alias.effector = path.resolve('./node_modules/effector/effector.cjs.js');
    // config.resolve.alias['effector-react/ssr'] = path.resolve('./node_modules/effector-react/ssr.js');
    // config.resolve.alias['effector-react'] = path.resolve('./node_modules/effector-react/ssr.js');

    const target = isServer ? 'server' : 'client';
    fs.writeFileSync(`webpack-config-${target}.json`, JSON.stringify(config, null, '  '));

    return config;
  }
};

module.exports = nextConfig;
