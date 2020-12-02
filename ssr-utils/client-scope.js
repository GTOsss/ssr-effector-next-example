import { fork } from 'effector';
import rootDomain from '../store/root';

export const clientScope = fork(rootDomain);
