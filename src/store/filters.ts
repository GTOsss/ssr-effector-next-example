import rootDomain, {createStore} from '@store/root-domain';
import {createForm} from 'effector-react-form/ssr';

type Values = {
  price: string;
  size: string;
};

export const form = createForm<Values>({
  domain: rootDomain,
  onSubmit: (params) => console.log(params),
  initialValues: {
    size: 'default size',
    price: '',
  }
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

