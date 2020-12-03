module.exports = (api) => {
  api.cache(true);

  const presets = ['next/babel'];
  const plugins = [
    // [
    //   'effector/babel-plugin',
    //   {
    //     factories: ['@vendors/effector-react-form'],
    //     importName: ['effector', 'effector/effector/effector.mjs', '@store/root-domain'],
    //   },
    // ],
  ];

  return {
    presets,
    plugins,
  };
};
