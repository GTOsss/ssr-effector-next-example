import root from './root';
import {getSSRDataExample} from '../../mock-server';
import {formSSR} from '@components/simple-form';

const getSSRDataExampleFx = root.createEffect({
  async handler() {
    return getSSRDataExample();
  },
})

const $ssrData = root.createStore({})
  .on(getSSRDataExampleFx.doneData, (_, data) => data);

getSSRDataExampleFx.doneData.watch(() => {
  console.log('setValue');
  formSSR.setValue({field: 'profile.firstName', value: 'value form GSSP!'});
})

export {
  getSSRDataExampleFx,
  $ssrData,
}
