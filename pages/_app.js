import {Provider as EffectorProvider} from 'effector-react/ssr';
import {fork, hydrate, serialize} from 'effector/fork';
import root from '../store/root';

const isBrowser = () => typeof window !== 'undefined';
const isServer = () => !isBrowser();

let currentScope;
let scope;

function serializeDiff(root, scope) {
  const ignore = [];
  for (const store of root.history.stores) {
    if (scope.getState(store) === store.defaultState) {
      ignore.push(store);
    }
  }
  return serialize(scope, {ignore});
}

export default function App({Component, pageProps}) {
  // const scope = fork(root, {values: pageProps.store});

  // if (isBrowser()) {
  //   console.log(serialize(scope));
  // } else {
  //   console.log(pageProps.store);
  // }

  if (isBrowser()) {
    if (currentScope) {
      scope = fork(root, {
        values: {
          ...pageProps.store,
          ...serializeDiff(root, currentScope), //
        }
      });
    } else {
      scope = fork(root, {values: pageProps.store});
    }
    currentScope = scope;
  } else {
    scope = fork(root, {values: pageProps.store});
  }

  return (
    <EffectorProvider value={scope}>
      <Component {...pageProps} />
    </EffectorProvider>
  );
}
