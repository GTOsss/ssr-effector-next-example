import React from 'react';
import {mapObject} from '1-a';

export const getServerSideProps = () => {
  return {props: {mapObject}};
}

const SSRPage = (props) => {
  console.log(props.mapObject, mapObject);
  return <div>ssr page</div>
}

export default SSRPage;
