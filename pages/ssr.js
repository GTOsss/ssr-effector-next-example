import React from 'react';
import {serialize, fork, allSettled} from 'effector/fork';
import root from '../store/root';
import {getUserFx} from '../store/user';
import {getFriendsFx} from '../store/friends';
import Page from '../components/page';

export const getServerSideProps = async (context) => {
  const scope = fork(root);
  await allSettled(getUserFx, {scope});
  await allSettled(getFriendsFx, {scope, params: 0});

  return {
    props: {
      store: serialize(scope),
    },
  };
};

const Dashboard = () => {
  return (
    <Page />
  );
};

export default Dashboard;
