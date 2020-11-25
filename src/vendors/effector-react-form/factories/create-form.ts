import {
  createEvent as createEventNative,
} from 'effector';

const createForm = ({
  domain,
})=> {
  const createEvent = domain ? domain.createEvent : createEventNative;

  const setValue = createEvent(`Form_SetValue`);

  return {
    setValue,
  };
};

export default createForm;
