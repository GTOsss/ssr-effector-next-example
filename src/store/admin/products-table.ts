import { createEffect, createEvent } from 'effector';
import { off as modalClose } from '@store/toggler-map';

export const changeTableParams = createEvent();

export const deleteProductFx = createEffect({
  handler: async () => null,
});

deleteProductFx.done.watch(() => modalClose('modalAuth'));
