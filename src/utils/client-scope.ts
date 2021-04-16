import { fork } from 'effector';
import rootDomain from '@store/root-domain';
import {isBrowser} from '@utils/common';
import {attachLogger} from 'effector-logger/attach';

export const clientScope = fork(rootDomain);

// todo 2 Если не вешать проверку isBrowser, работать не будет
if (isBrowser()) attachLogger(clientScope);
