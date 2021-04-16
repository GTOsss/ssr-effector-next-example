import {Provider as EffectorProvider} from 'effector-react/ssr';
import '@store/filters';
import {useMergeState} from '@hooks/use-merge-state';
import 'effector-logger/inspector';

export default function App({Component, pageProps}) {
  const scope = useMergeState(pageProps);

  return (
    <EffectorProvider value={scope}>
      <Component {...pageProps} />
    </EffectorProvider>
  );
}
