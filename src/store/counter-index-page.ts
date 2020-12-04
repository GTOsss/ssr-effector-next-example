import root from './root-domain';

const inc = root.createEvent<number>();
const reset = root.createEvent();

const $count = root.createStore(0);

$count.on(inc, (state, value = 1) => state + value).reset(reset);

export {$count, inc, reset};
