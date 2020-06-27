const resolveByTimeout = (data) =>
  new Promise((resolve) => setTimeout(resolve, 1000, data));

export const getUser = () => resolveByTimeout({
  id: 'test',
  username: 'TestUser',
});

export const getFriends = () => resolveByTimeout([
  {id: 1, username: 'user 1'},
  {id: 2, username: 'user 2'},
  {id: 3, username: 'user 3'},
]);
