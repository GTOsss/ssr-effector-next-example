/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import API from './core';

export const getModel = (id) => `/models/${id}`;

export const getUser = (id) => `/users/${id}`;

export const authSignup = () => `/auth/sign-up`;
export const authLogin = () => `/auth/login`;
export const authRefresh = () => `/auth/refresh`;
export const authLogout = () => `/auth/logout`;

export const deleteProduct = (id) => `/products/${id}`;

export const getSeoNavVariants = () => '/seo-nav-variants';
export const getSeoUnits = () => '/seo-units';

export default API;
