import {sample, combine} from 'effector';
import root from './root';
import {getFriends} from '../mock-server';

const setPage = root.createEvent();

const page$ = root.createStore(0)
  .on(setPage, (_, page) => page);

const getFriendsFx = root.createEffect({
  async handler(page) {
    return await getFriends(page);
  }
});

const friends$ = root.createStore([])
  .on(getFriendsFx.doneData, (_, friends) => friends);

sample({
  source: page$,
  target: getFriendsFx,
});

export {
  getFriendsFx,
  friends$,
  setPage,
  page$,
};

