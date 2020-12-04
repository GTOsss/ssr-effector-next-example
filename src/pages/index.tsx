import React from 'react';
import {serialize, fork, allSettled} from 'effector';
import root from '@store/root-domain';
import {useEvent, useStore} from 'effector-react/ssr';
import Page from '@components/page';
import {$count, inc, reset} from '@store/counter-index-page';

export const getServerSideProps = async (context) => {
  const scope = fork(root);
  await allSettled(reset, {scope});

  return {
    props: {
      store: serialize(scope, {onlyChanges: true}),
    },
  };
};

const Dashboard = () => {
  const count = useStore($count);
  const events = useEvent({inc});

  // if (count < 1) {
  //   events.inc(3);
  // }

  return (
    <Page>
      <h1>Index</h1>

      <br />

      <button style={{border: '2px solid grey'}} onClick={() => events.inc(1)}>
        inc 1
      </button>
      <div>value from store: {count}</div>

      <br />

      <h3>User</h3>
    </Page>
  );
};

export default Dashboard;
