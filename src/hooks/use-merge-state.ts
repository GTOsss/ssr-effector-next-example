import { isBrowser } from '@utils/common';
import { useEffect } from 'react';
import { fork, hydrate } from 'effector';
import { clientScope } from '@utils/client-scope';
import rootDomain from '@store/root-domain';

let isFirstHydration = true;

export const useMergeState = (pageProps) => {
  if (isBrowser()) {
    const syncHydration = isFirstHydration;
    isFirstHydration = false;

    useEffect(() => {
      if (syncHydration) return;
      hydrate(clientScope, {
        values: pageProps.store,
      });
    }, [pageProps, syncHydration]);

    if (syncHydration) {
      hydrate(clientScope, {
        values: pageProps.store,
      });
    }
    return clientScope;
  }
  return fork(rootDomain, {
    values: pageProps.store,
  });
};
