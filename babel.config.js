module.exports = (api) => {
  api.cache(true);

  const presets = ['next/babel'];
  const plugins = [
    [
      'effector/babel-plugin',
      {
        factories: ['effector-react-form'],
        importName: ['effector', 'effector-react-form', '@store/root-domain'],
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
