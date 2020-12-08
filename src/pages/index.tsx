import React, {useEffect} from 'react';
import {serialize, fork, allSettled} from 'effector';
import root from '@store/root-domain';
import Page from '@components/page';
import {form} from '@store/filters';
import {useForm} from 'effector-react-form/ssr';
import {GetServerSidePropsContext} from 'next';
import Input from '@components/input';
import {useStore} from 'effector-react/ssr';
import Link from 'next/link';
import {useRouter} from 'next/router';

export const getServerSideProps = async ({query}: GetServerSidePropsContext) => {
  const scope = fork(root);
  await allSettled(form.setValue, {scope, params: {field: 'price', value: query.price || 0}});
  return {
    props: {
      store: serialize(scope, {onlyChanges: true}),
    },
  };
};

const Dashboard = () => {
  const {controller, handleSubmit} = useForm({
    form,
  });
  const {price, size} = useStore(form.$values);
  const router = useRouter();

  useEffect(() => {
    window.history.replaceState(null, null, `?price=${price}`);
  }, [price])

  return (
    <Page>
      <h1>Index</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Price" controller={controller({name: 'price'})} />
        <Input label="Size" controller={controller({name: 'size'})} />
      </form>

      <br />

      <Link href="/?price=100">
        <a>price 100</a>
      </Link>
      <br />
      <Link href="/?price=1000">
        <a>price 1000</a>
      </Link>

      <br/>

      <div>
        current filters
        price: {price}
        <br />
        size: {size}
      </div>
    </Page>
  );
};

export default Dashboard;
