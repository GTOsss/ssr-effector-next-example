import { Provider as EffectorProvider } from 'effector-react/ssr'
import { fork, hydrate } from 'effector/fork';
import root from '../store/root';

export const isBrowser = () => typeof window !== 'undefined';

export default function App({ Component, pageProps }) {

  if (isBrowser()) {
    hydrate(root, { values: pageProps.store }); // why pageProps.store is empty object
  }

  const scope = fork(root);

  return (
    <EffectorProvider value={scope}>
      <Component {...pageProps} />
    </EffectorProvider>
  )
}
