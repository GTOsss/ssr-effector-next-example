import React from 'react';
import {serialize, fork, allSettled} from 'effector';
import Page from '@components/page';
import {useStore} from 'effector-react/ssr';
import root from '@store/root-domain';

export const getStaticProps = async (context) => {
  const scope = fork(root);

  return {
    props: {
      store: serialize(scope, {onlyChanges: true}),
    },
  };
};

const Dashboard = () => {
  return (
    <Page>
      <h1>SSG</h1>
      {/*<pre>{JSON.stringify(ssgData, null, '  ')}</pre>*/}
    </Page>
  );
};

export default Dashboard;
