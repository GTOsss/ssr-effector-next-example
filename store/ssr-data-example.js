import root from './root';
import {getSSRDataExample} from '../mock-server';

const getSSRDataExampleFx = root.createEffect({
  async handler() {
    return getSSRDataExample();
  },
})

const $ssrData = root.createStore({})
  .on(getSSRDataExampleFx.doneData, (_, data) => data);

export {
  getSSRDataExampleFx,
  $ssrData,
}
