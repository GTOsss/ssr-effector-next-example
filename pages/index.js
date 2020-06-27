import React from 'react';
import {useStore, useEvent} from 'effector-react/ssr';
import {serialize, fork} from 'effector/fork';
import root from '../store/root';
import {$count, inc as incEvent} from '../store/counter';

// incEvent(3); // ok

export const getServerSideProps = async (context) => {
  // incEvent(3); // fail

  return {
    props: {
      store: serialize(fork(root)),
    },
  };
};

const Dashboard = ({lang}) => {
  const count = useStore($count);
  const inc = useEvent(incEvent);

  if (count < 3) {
    inc(1); // ok
  }

  return (
    <div className="container">
      <h2>Test effector</h2>
      <div>value from store: {count}</div>
      <button style={{border: '2px solid grey'}} onClick={() => inc(1)}>
        inc 1
      </button>
      <button style={{border: '2px solid grey'}} onClick={() => inc(2)}>
        inc 2
      </button>
    </div>
  );
};

export default Dashboard;
