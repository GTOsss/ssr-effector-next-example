import { createEvent, sample } from 'effector';
import rootDomain from '@store/root-domain';
import { $auth } from '@store/auth';

export const getCurrentUser = createEvent();

export const getCurrentUserFx = rootDomain.createEffect({
  handler: async () => null,
});

sample({
  source: $auth as any,
  clock: getCurrentUser,
  target: getCurrentUserFx,
});
