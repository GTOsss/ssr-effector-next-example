module.exports = (api) => {
  api.cache(true);

  const presets = ['next/babel'];
  const plugins = [
    [
      'effector/babel-plugin',
      {
        factories: ['effector-react-form/ssr'],
        importName: ['effector', 'effector-react-form/ssr', '@store/root-domain'],
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
