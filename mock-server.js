const friends = [
  {id: 0, username: 'test 0'},
  {id: 1, username: 'test 1'},
  {id: 2, username: 'test 2'},
  {id: 3, username: 'test 3'},
];

const resolveByTimeout = (data) =>
  new Promise((resolve) => setTimeout(resolve, 1000, data));

export const getUser = () => {
  return resolveByTimeout({id: 'test', username: 'test username'});
};

export const getFriends = (page) => resolveByTimeout([friends[page]]);
