import {createEvent, createStore, createEffect, sample} from '@store/root-domain';

export const setQueryData = createEvent<any>();

export const $queryData = createStore(null).on(setQueryData, (_, query) => query);

// Проблема в том, что эффект вызывается на сервере и на клиенте в момент гидратации.
// Если эффект включит прелоудер на странице, реакт кинет warning о несовпадении dom дерева на
// клиенте и бэке.

const someRequestFx = createEffect(async (params) => {
  console.log('REQUEST WITH PARAMS: ', params);
});

sample({
  source: $queryData,
  target: someRequestFx,
})

