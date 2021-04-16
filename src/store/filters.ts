import {createEvent, createStore, createEffect, sample} from '@store/root-domain';
import {isBrowser} from '@utils/common';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, 200))

export const setQueryData = createEvent<any>();

export const $queryData = createStore(null).on(setQueryData, (_, query) => query);

export const someRequestFx = createEffect(async (params) => {
  console.log('REQUEST WITH PARAMS: ', params);
  await sleep(500);
});

let ignoreBrowserRequest = true;

const isIgnoreRequest = () => {
  if (isBrowser() && ignoreBrowserRequest) {
    ignoreBrowserRequest = false;
    return false;
  }

  return true;
};

sample({
  source: $queryData,
  clock: $queryData.updates.filter({fn: isIgnoreRequest}),
  target: someRequestFx,
})
