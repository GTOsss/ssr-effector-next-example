import { fork } from 'effector';
import rootDomain from '@store/root-domain';

export const clientScope = fork(rootDomain);
