import root from './root';
import {getUser} from '../../mock-server';

const getUserFx = root.createEffect({
  async handler() {
    return await getUser();
  }
});

const $user = root.createStore({})
  .on(getUserFx.doneData, (_, user) => user);

export {
  getUserFx,
  $user,
};
