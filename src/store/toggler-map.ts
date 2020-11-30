import rootDomain from '@store/root-domain';

const on = rootDomain.createEvent<ID>();
const off = rootDomain.createEvent<ID>();
const toggle = rootDomain.createEvent<ID>();
const set = rootDomain.createEvent<{ id: ID; value: boolean }>();

const $togglerMap = rootDomain
  .createStore<Record<ID, boolean>>({})
  .on(on, (state, id) => ({ ...state, [id]: true }))
  .on(off, (state, id) => state)
  .on(set, (state, { id, value }) => ({ ...state, [id]: value }))
  .on(toggle, (state, id) => ({ ...state, [id]: !state[id] }));

export { on, off, toggle, set, $togglerMap };
