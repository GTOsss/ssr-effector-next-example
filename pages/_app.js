import {Provider as EffectorProvider} from 'effector-react/ssr';
// create all effector units via root domain before use (!)
import '../store/all-stores';
// fork client-scope
import '../ssr-utils/client-scope';
import {mergeState} from '../ssr-utils/merge-state';

export default function App({Component, pageProps}) {
  const scope = mergeState(pageProps);

  return (
    <EffectorProvider value={scope}>
      <Component {...pageProps} />
    </EffectorProvider>
  );
}
