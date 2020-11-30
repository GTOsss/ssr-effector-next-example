import rootDomain from '@store/root-domain';

export const getCurrencyListFx = rootDomain.createEffect({
  handler: async (params = {}) => [],
});

export const $currencyList = rootDomain.createStore<any>([]).on(getCurrencyListFx.doneData, (_, data) => data);

export const $currency = $currencyList.map((currencyList) => currencyList.find((cur) => cur.isActive) || null);
