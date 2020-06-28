import React from 'react';
import {serialize, fork, allSettled} from 'effector/fork';
import {combine} from 'effector';
import root from '../store/root';
import {getUserFx, $user} from '../store/user';
import {getFriendsFx, setPage as setPageEvent, $page, $friends} from '../store/friends';
import Page from '../components/page';
import {useEvent, useStore} from 'effector-react/ssr';
import {$count, inc as incEvent} from '../store/counter-index-page';
import Loader from '../components/loader';

export const getServerSideProps = async (context) => {
  const scope = fork(root);
  await allSettled(getUserFx, {scope});
  await allSettled(getFriendsFx, {scope, params: 0});

  return {
    props: {
      store: serialize(scope),
    },
  };
};

// const $loadingPage = combine([getUserFx.pending, getFriendsFx.pending])
//   .map(loadings => loadings.includes(true));

const Dashboard = () => {
  const count = useStore($count);
  const inc = useEvent(incEvent);

  const getUser = useEvent(getUserFx);

  const user = useStore($user);
  const userPending = useStore(getUserFx.pending);

  const setPage = useEvent(setPageEvent);

  const page = useStore($page);
  const friends = useStore($friends);
  const friendsPending = useStore(getFriendsFx.pending);

  // const isLoadingPage = useStore($loadingPage);

  if (count < 1) {
    inc(3);
  }

  return (
    <Page>
      <h1>Index</h1>

      <Loader isLoading={false}>
        <br />

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

        <br />

        <h3>Users</h3>
        <button onClick={() => setPage(page - 1)} disabled={(page <= 0) || friendsPending}>
          previous page
        </button>
        <button onClick={() => setPage(page + 1)} disabled={(page >= 3) || friendsPending}>
          next page
        </button>
        <div>page: {page}</div>
        {friendsPending
          ? 'loading...'
          : (<pre>{JSON.stringify(friends, null, '  ')}</pre>)
        }
      </Loader>
    </Page>
  );
};

export default Dashboard;
