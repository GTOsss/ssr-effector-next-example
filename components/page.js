import Nav from './nav';
import {useEvent, useStore} from 'effector-react/ssr';
import {$count, inc as incEvent} from '../store/counter';
import {getUserFx, user$} from '../store/user';
import {friends$, getFriendsFx, page$, setPage as setPageEvent} from '../store/friends';

export default function Page({children}) {
  const count = useStore($count);
  const inc = useEvent(incEvent);

  const getUser = useEvent(getUserFx);

  const user = useStore(user$);
  const userPending = useStore(getUserFx.pending);

  const setPage = useEvent(setPageEvent);

  const page = useStore(page$);
  const friends = useStore(friends$);
  const getFriendsPending = useStore(getFriendsFx.pending);

  if (count < 1) {
    inc(3);
  }

  return (
    <div className="container">
      <Nav />

      {children}

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
      <button
        onClick={() => setPage(page - 1)}
        disabled={getFriendsPending || (page <= 0)}
      >
        {getFriendsPending ? 'pending...' : 'prev page'}
      </button>
      <button
        onClick={() => setPage(page + 1)}
        disabled={getFriendsPending || (page >= 3)}
      >
        {getFriendsPending ? 'pending...' : 'next page'}
      </button>
      <div>page: {page}</div>
      {getFriendsPending
        ? 'loading...'
        : (<pre>{JSON.stringify(friends, null, '  ')}</pre>)
      }
    </div>
  );
}
