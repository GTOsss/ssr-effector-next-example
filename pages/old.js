import React from 'react';
import {serialize, fork, allSettled} from 'effector/fork';
import {useStore} from 'effector-react/ssr';
import root from '../store/root';
import Page from '../components/page';
import {getSSGDataExampleFx, $ssgData} from '../store/ssg-data-example';

const Dashboard = ({test}) => {
  const ssgData = useStore($ssgData);

  return (
    <Page>
      <h1>getInitialProps</h1>
      <h2>{test}</h2>
      <pre>{JSON.stringify(ssgData, null, '  ')}</pre>
    </Page>
  );
};


Dashboard.getInitialProps = async (context) => {
  console.log('test');


  return {
    test: 'asdfasdf'
  };

  // const scope = fork(root);
  // await allSettled(getSSGDataExampleFx, {scope});
  //
  // return {
  //   props: {
  //     store: serialize(scope),
  //   },
  // };
};


export default Dashboard;
