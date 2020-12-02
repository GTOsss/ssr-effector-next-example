import React from 'react';
import {serialize, fork, allSettled} from 'effector/fork';
import {useStore} from 'effector-react/ssr';
import root from '../store/root';
import Page from '../components/page';
import {getSSGDataExampleFx, $ssgData} from '../store/ssg-data-example';

export const getStaticProps = async (context) => {
  const scope = fork(root);
  await allSettled(getSSGDataExampleFx, {scope});

  return {
    props: {
      store: serialize(scope, {onlyChanges: true}),
    },
  };
};

const Dashboard = () => {
  const ssgData = useStore($ssgData);

  return (
    <Page>
      <h1>SSG</h1>
      <pre>{JSON.stringify(ssgData, null, '  ')}</pre>
    </Page>
  );
};

export default Dashboard;
