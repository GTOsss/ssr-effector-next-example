import rootDomain, {createEffect, createStore} from '@store/root-domain';
import {createForm} from 'effector-react-form';

export const form = createForm({
  domain: rootDomain,
});

export const form2 = createForm({
  domain: rootDomain,
});

const $state = createStore({value: 'default value'});

console.log(
  'sids: ',
  {
    form: form.setValue.sid,
    form2: form2.setValue.sid,
    state: $state.sid,
  },
);

export const getAttributeFx = createEffect({
  handler: async (id) => '',
});

export const putAttributeFx = createEffect({
  handler: async ({values}) => {
    return '';
  },
});

