import { isBrowser } from '@utils/common';
import { refreshFx } from '@store/refresh';
import { addNotification } from '@store/notification';

console.log(
  typeof isBrowser,
  typeof refreshFx,
  typeof addNotification,
);

const fetcher = {
  get: () => null,
  post: () => null,
};

export default fetcher;
