import React from 'react';
import {serialize, fork, allSettled} from 'effector';
import root from '@store/root-domain';
import {useStore} from 'effector-react/ssr';
import Page from '@components/page';
import {$data, $page, setPage} from '@store/data';
import {GetServerSidePropsContext} from 'next';

export const getServerSideProps = async ({query}: GetServerSidePropsContext) => {
  const {page} = query;
  const scope = fork(root);
  await allSettled(setPage, {scope, params: page});

  return {
    props: {
      store: serialize(scope, {onlyChanges: true}),
    },
  };
};

const Dashboard = () => {
  const currentPageData = useStore($data);
  const page = useStore($page);

  return (
    <Page>
      <h1>{currentPageData.title}</h1>
      <div>current page: {page}</div>
    </Page>
  );
};

export default Dashboard;
