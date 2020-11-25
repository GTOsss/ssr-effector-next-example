import React from 'react';
import '@store/attributes';

export const getServerSideProps = async () => {
  const commonServerSideProps = await {};

  return {
    props: {
      ...commonServerSideProps,
    },
  };
};
const AttributePage = () => (
  <div>test</div>
);

export default AttributePage;
