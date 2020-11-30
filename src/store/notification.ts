import { createEvent, createStore } from 'effector';

export const addNotification = createEvent<any>();
export const removeNotification = createEvent<ID>();

const initialState = {
  notifications: [],
  loadingUIid: '1',
};

export const $notification = createStore(initialState)
  .on(addNotification, (state) => state)
  .on(removeNotification, (state) => state)

export default {
  $notification,
  addNotification,
  removeNotification,
};
