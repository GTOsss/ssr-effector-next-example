const resolveByTimeout = (data) =>
  new Promise((resolve) => setTimeout(resolve, 1000, data));

export const getUser = () => {
  return resolveByTimeout({id: 'test', username: 'test username'});
};

const friends = [
  {id: 0, username: 'test 0'},
  {id: 1, username: 'test 1'},
  {id: 2, username: 'test 2'},
  {id: 3, username: 'test 3'},
];

export const getFriends = (page) => resolveByTimeout([friends[page]]);

export const getSSRDataExample = () => {
  return resolveByTimeout({label: 'ssr data example'});
};

export const getSSGDataExample = () => {
  return resolveByTimeout({label: 'ssg data example'});
};
