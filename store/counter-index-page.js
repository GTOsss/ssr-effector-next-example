import root from './root';

const inc = root.createEvent();

const resetCountEvent = root.createEvent();

const $count = root.createStore(0).reset(resetCountEvent);

$count.on(inc, (state, value = 1) => state + value);

export {$count, inc, resetCountEvent};
