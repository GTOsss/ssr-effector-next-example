import React from 'react';
import {serialize, fork, allSettled} from 'effector/fork';
import {useStore} from 'effector-react/ssr';
import root from '../store/root';
import Page from '../components/page';
import {getSSRDataExampleFx, $ssrData} from '../store/ssr-data-example';
import {$count as $countFromIndexPage} from '../store/counter-index-page';

export const getServerSideProps = async (context) => {
  const scope = fork(root);
  await allSettled(getSSRDataExampleFx, {scope});

  return {
    props: {
      store: serialize(scope, {onlyChanges: true}),
    },
  };
};

const Dashboard = () => {
  const ssrData = useStore($ssrData);
  const count = useStore($countFromIndexPage);

  return (
    <Page>
      <h1>SSR</h1>
      <div>count from index page: {count}</div>
      <pre>{JSON.stringify(ssrData, null, '  ')}</pre>
    </Page>
  );
};

export default Dashboard;
