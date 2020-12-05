import {createEvent, createStore, sample} from '@store/root-domain';

export const setPage = createEvent<number>();
export const nextPage = createEvent();
export const prevPage = createEvent();

export const $page = createStore(1, {sid: '$page'})
  .on(setPage, (_, page) => page)
  .on(nextPage, (page) => ++page)
  .on(prevPage, (page) => --page);

const mockData = [
  {title: 'title 0'},
  {title: 'title 1'},
  {title: 'title 2'},
];

type Data = {
  title: string;
};

export const $data = createStore<Data>({title: 'default value'}, {sid: '$data'});

sample({
  source: $page,
  fn: (page) => mockData[page],
  target: $data,
});
