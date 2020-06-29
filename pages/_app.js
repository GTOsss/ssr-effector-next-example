import {Provider as EffectorProvider} from 'effector-react/ssr';
import {fork, serialize} from 'effector/fork';
import root from '../store/root';

const isBrowser = () => typeof window !== 'undefined';

let currentScope;
let scope;

function serializeDiff(root, scope) {
  const ignore = []
  for (const store of root.history.stores) {
    let needIgnore = true
    try {
      needIgnore = scope.getState(store) === store.defaultState
    } catch (err) {}
    if (needIgnore) {
      ignore.push(store)
    }
  }
  return serialize(scope, {ignore})
}

export default function App({Component, pageProps}) {
  if (isBrowser()) {
    if (currentScope) {
      scope = fork(root, {
        values: {
          ...pageProps.store,
          ...serializeDiff(root, currentScope),
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
