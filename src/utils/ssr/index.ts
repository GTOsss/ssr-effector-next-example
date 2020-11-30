import { isBrowser } from '@utils/common';
import { serialize, fork } from 'effector';
import rootDomain from '@store/root-domain';

let currentScope;

export const mergeState = (pageProps: Record<string, any>): any => {
  let scope;
  if (isBrowser() && currentScope) {
    scope = fork(rootDomain, {
      values: {
        ...serialize(currentScope, { onlyChanges: true }),
        ...pageProps.store,
      },
    });
  } else {
    scope = fork(rootDomain, { values: pageProps.store });
  }
  if (isBrowser()) currentScope = scope;

  return scope;
};
