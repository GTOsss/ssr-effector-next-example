import root from './root';
import {getFriends} from '../mock-server';

const getFriendsFx = root.createEffect({
  async handler() {
    return await getFriends();
  }
});

const friends$ = root.createStore([])
  .on(getFriendsFx.doneData, (_, friends) => friends);

export {
  getFriendsFx,
  friends$,
};
