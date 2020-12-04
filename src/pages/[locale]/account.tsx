import React from 'react';
import {mapObject} from '1-a';

export const getStaticProps = async (props) => {
  return {
    props: {
      store: mapObject,
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
  console.log(props.store, mapObject)
  return <div>test</div>;
};

export default UserAccountPage;
