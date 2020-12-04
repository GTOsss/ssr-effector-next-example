import React from 'react';
import {setValue} from '1-a';
// import {setValue} from '1-a/1-a.mjs'; // will be bug
import '@store/store-element';

setValue('1', 1);

const App = (props) => {
  const {Component, pageProps, err} = props;

  return (
    <Component
      {...pageProps}
      error={err}
    />
  );
};

export default App;

