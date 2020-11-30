import React from 'react';
import { fork, serialize } from 'effector';
import rootDomain from '@store/root-domain';

export const getStaticProps = async (props, scope?) => {
  const currentScope = scope || fork(rootDomain);

  return {
    props: {
      isReadyToRender: true,
      isStaticRendering: true,
      store: serialize(currentScope, { onlyChanges: true }),
    },
  };
};

export const getStaticPaths = async () => {
  const paths = [{ name: 'ru' }, { name: 'en' }].map((supportedLocale) => {
    return {
      params: {
        locale: supportedLocale.name,
      },
    };
  });

  return {
    fallback: false,
    paths,
  };
};

const UserAccountPage = (props) => {
  return <div>test</div>;
};

export default UserAccountPage;
