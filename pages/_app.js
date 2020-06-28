import { Provider as EffectorProvider } from 'effector-react/ssr'
import { fork, hydrate } from 'effector/fork';
import root from '../store/root';

export const isBrowser = () => typeof window !== 'undefined';

export default function App({ Component, pageProps }) {
  const scope = fork(root, {values: pageProps.store});

  return (
    <EffectorProvider value={scope}>
      <Component {...pageProps} />
    </EffectorProvider>
  )
}
