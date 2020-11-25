import React, {useEffect} from 'react';
import {createForm, useForm} from '@vendors/effector-react-form';
import {useStore} from 'effector-react/ssr';
import root from '@store/root';

export const formSSR = createForm({
  domain: root,
  initialValues: {username: 'ssr'},
  onSubmit: ({values}) => alert(JSON.stringify(values, null, ' ')),
});

export const formSSR2 = createForm({
  domain: root,
  initialValues: {username: 'ssr'},
  onSubmit: ({values}) => alert(JSON.stringify(values, null, ' ')),
});

console.log({formSSR: formSSR.$values.sid, formSSR2: formSSR2.$values.sid})

const Input = ({controller, label}) => {
  const {input} = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className="input" />
    </div>
  );
};

const Form = () => {
  const {handleSubmit, controller, reset} = useForm({
    form: formSSR,
    onSubmit: ({values}) => {
      alert(JSON.stringify(values, null, '  '));
    }
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  // const values = useStore(formSSR.$values);
  // console.log({values});

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Username" controller={controller({name: 'username'})} />
      <Input label="First name" controller={controller({name: 'profile.firstName'})} />
      <Input label="Last name" controller={controller({name: 'profile.lastName'})} />
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
