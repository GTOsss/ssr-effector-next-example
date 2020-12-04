import React from 'react';
import {serialize, fork, allSettled} from 'effector';
import {useStore} from 'effector-react/ssr';
import Page from '@components/page';
import root from '@store/root-domain';
import {$count as $countFromIndexPage} from '@store/counter-index-page';

export const getServerSideProps = async (context) => {
  const scope = fork(root);

  return {
    props: {
      store: serialize(scope, {onlyChanges: true}),
    },
  };
};

const Dashboard = () => {
  const count = useStore($countFromIndexPage);

  return (
    <Page>
      <h1>SSR</h1>
      <div>count from index page: {count}</div>
    </Page>
  );
};

export default Dashboard;
