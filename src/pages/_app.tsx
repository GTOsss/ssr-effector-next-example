import React from 'react';
import { Provider as EffectorProvider } from 'effector-react/ssr';
import { mergeState } from '@utils/ssr';
import { getInjectedPageProps } from '@utils/nextjs/app-page-props';
import '@store/data/currency';
import '@store/root-domain';
import { getCurrentUser } from '@store/user';
import '@store/admin/products-table';
import '@store/data/by-seo-nav-variant/categories';

const App = (props) => {
  const { Component, pageProps, err } = props;
  const injectedPageProps = getInjectedPageProps(pageProps);
  const { isReadyToRender, statusCode } = injectedPageProps;

  React.useEffect(() => {
    getCurrentUser();
  }, []);

  if (isReadyToRender || statusCode === 404) {
    const scope = mergeState(injectedPageProps);

    return (
      <EffectorProvider value={scope}>
        <Component
          {...injectedPageProps}
          // @ts-ignore
          error={err}
        />
      </EffectorProvider>
    );
  } else {
    return null;
  }
};

export default App;
