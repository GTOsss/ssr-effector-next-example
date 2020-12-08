import {fork, hydrate} from 'effector';
import {clientScope} from './client-scope';
import rootDomain from '@store/root-domain';

export const isBrowser = () => typeof window !== 'undefined';

// deprecated
//
// let currentScope;
//
// export const mergeState = (pageProps) => {
//   let scope;
//   if (isBrowser() && currentScope) {
//     scope = fork(rootDomain, {
//       values: {
//         ...serialize(currentScope, { onlyChanges: true }),
//         ...pageProps.store,
//       },
//     });
//   } else {
//     scope = fork(rootDomain, { values: pageProps.store });
//   }
//   if (isBrowser()) currentScope = scope;
//
//   return scope;
// };

export const mergeState = pageProps => {
  if (isBrowser()) {
    hydrate(clientScope, {
      values: pageProps.store
    });
    return clientScope;
  }
  return fork(rootDomain, {
    values: pageProps.store
  });
};

