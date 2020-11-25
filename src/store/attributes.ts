import rootDomain, { createEffect } from '@store/root-domain';
import { createForm } from '@vendors/effector-react-form';

export const form = createForm({
  domain: rootDomain,
});

export const getAttributeFx = createEffect({
  handler: async (id) => '',
});

export const putAttributeFx = createEffect({
  handler: async ({ values }) => {
    return '';
  },
});

