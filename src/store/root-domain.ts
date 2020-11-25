import { createDomain, attach, forward, combine, sample } from 'effector/effector.mjs';

const rootDomain = createDomain();

const { createStore, createEffect, createEvent } = rootDomain;

export default rootDomain;
export { createStore, createEffect, createEvent, attach, forward, combine, sample };
