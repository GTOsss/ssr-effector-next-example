import {Provider as EffectorProvider} from 'effector-react/ssr';
import {fork, serialize} from 'effector/fork';
import root from '@store/root';
import '@store/user';
import '@store/counter-index-page';
import '@store/ssr-data-example';
import '@store/ssg-data-example';
import '@store/friends';

const isBrowser = () => typeof window !== 'undefined';

let currentScope;

export const mergeState = (pageProps) => {
  let scope;
  if (isBrowser() && currentScope) {
    scope = fork(root, {
      values: {
        ...serialize(currentScope, { onlyChanges: true }),
        ...pageProps.store,
      },
    });
  } else {
    scope = fork(root, { values: pageProps.store });
  }
  if (isBrowser()) currentScope = scope;

  return scope;
};

export default function App({Component, pageProps}) {
  const scope = mergeState(pageProps);

  return (
    <EffectorProvider value={scope}>
      <Component {...pageProps} />
    </EffectorProvider>
  );
}
