import {Provider as EffectorProvider} from 'effector-react/ssr';
import '@store/attributes';
import '@store/counter-index-page';
import {mergeState} from '@utils/merge-state';

export default function App({Component, pageProps}) {
  const scope = mergeState(pageProps);

  return (
    <EffectorProvider value={scope}>
      <Component {...pageProps} />
    </EffectorProvider>
  );
}
