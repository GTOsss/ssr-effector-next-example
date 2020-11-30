import { createEffect } from 'effector';
import API from '../services/API';

export const refreshFx = createEffect({
  handler: async () => API.post(),
});
