import React from 'react';
import {serialize, fork, allSettled} from 'effector';
import root from '@store/root-domain';
import Page from '@components/page';
import {setQueryData} from '@store/filters';
import {GetServerSidePropsContext} from 'next';
import Link from 'next/link';

export const getServerSideProps = async ({query}: GetServerSidePropsContext) => {
  const scope = fork(root);
  await allSettled(setQueryData, {scope, params: {price: query.price || 0}});

  return {
    props: {
      store: serialize(scope, {onlyChanges: true}),
    },
  };
};

const Dashboard = () => {
  return (
    <Page>
      <h1>Index</h1>

      <br />

      <Link href="/?price=100">
        <a>price 100</a>
      </Link>
      <br />
      <Link href="/?price=1000">
        <a>price 1000</a>
      </Link>

      <br/>
    </Page>
  );
};

export default Dashboard;
