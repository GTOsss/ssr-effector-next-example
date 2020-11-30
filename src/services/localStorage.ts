import { isBrowser } from '@utils/common';

export const lsConstants = {};

const set = () => null;

const get = () => null;

const remove = () => null;

const clear = () => (isBrowser() ? null : null);

export const lsService = {
  set,
  get,
  remove,
  clear,
};
