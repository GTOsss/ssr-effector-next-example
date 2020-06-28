import React from 'react';
import {useStore, useEvent} from 'effector-react/ssr';
import {serialize, fork, allSettled} from 'effector/fork';
import root from '../store/root';
import {$count, inc as incEvent} from '../store/counter';
import {getUserFx, user$} from '../store/user';
// import {getFriendsFx, friends$} from '../store/friends';

export const getServerSideProps = async (context) => {
  const scope = fork(root);
  await allSettled(getUserFx, {scope})

  return {
    props: {
      store: serialize(scope),
    },
  };
};

const Dashboard = () => {
  const count = useStore($count);
  const inc = useEvent(incEvent);

  const getUser = useEvent(getUserFx);

  const user = useStore(user$);
  const userPending = useStore(getUserFx.pending);

  return (
    <div className="container">
      <h2>Test effector</h2>
      <button style={{border: '2px solid grey'}} onClick={() => inc(1)}>
        inc 1
      </button>
      <div>value from store: {count}</div>

      <br />

      <h3>User</h3>
      <button
        onClick={() => getUser()}
        disabled={userPending}
      >
        {userPending ? 'pending...' : 'update user'}
      </button>
      <pre>{JSON.stringify(user, null, '  ')}</pre>
    </div>
  );
};

export default Dashboard;
