import root from './root';
import {getSSGDataExample} from '../../mock-server';

const getSSGDataExampleFx = root.createEffect({
  async handler() {
    return getSSGDataExample();
  },
})

const $ssgData = root.createStore({})
  .on(getSSGDataExampleFx.doneData, (_, data) => data);

export {
  getSSGDataExampleFx,
  $ssgData,
}
