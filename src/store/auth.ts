import { createStore, createEffect, createEvent } from 'effector';
import API from '@services/API';

export const clearPassword = createEvent();
export const $login = createStore({}).on(clearPassword, (state) => state);

export const loginFx = createEffect({
  handler: async () => API.post(),
});

export const logoutFx = createEffect({
  handler: async () => API.post(),
});

export const loginAfterSignUpFx = createEffect({
  handler: async () => API.post(),
});

export const $signup = createStore({});

export const signupFx = createEffect({
  handler: async () => API.post(),
});

export const refreshFx = createEffect({
  handler: async () => API.post(),
});

export const $auth = createStore({})
  .on(refreshFx.doneData, (state, data) => data)
  .on(loginFx.doneData, (_, data) => (data))
  .on(logoutFx.doneData, () => ({}))
  .on(signupFx.doneData, (_, data) => data)
  .on(loginAfterSignUpFx.doneData, (_, data) => data);
