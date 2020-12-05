import React from 'react';
import {serialize, fork} from 'effector';
import root from '@store/root-domain';
import {useEvent, useStore} from 'effector-react/ssr';
import Page from '@components/page';
import {$data, $page, nextPage, prevPage} from '@store/data';
import {GetServerSidePropsContext} from 'next';

export const getServerSideProps = async ({}: GetServerSidePropsContext) => {
  const scope = fork(root);
  return {
    props: {
      store: serialize(scope, {onlyChanges: true}),
    },
  };
};

const Dashboard = () => {
  const currentPageData = useStore($data);
  const page = useStore($page);
  const events = useEvent({nextPage, prevPage});

  return (
    <Page>
      <h1>ssr1</h1>
      <div>current data: {currentPageData.title}</div>
      <div>current page: {page}</div>
      <br/>
      <br/>
      <button onClick={() => events.prevPage()}>{'prev page'}</button>
      <button onClick={() => events.nextPage()}>{'next page'}</button>
    </Page>
  );
};

export default Dashboard;
