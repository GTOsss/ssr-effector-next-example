import React from 'react';
import {serialize, fork, allSettled, scopeBind} from 'effector/fork';
import {useStore} from 'effector-react/ssr';
import root from '@store/root';
import Page from '@components/page';
import {getSSRDataExampleFx, $ssrData} from '@store/ssr-data-example';
import {$count as $countFromIndexPage} from '@store/counter-index-page';
import SimpleForm, {formSSR} from '@components/simple-form';

export const getServerSideProps = async (context) => {
  const scope = fork(root);
  await allSettled(getSSRDataExampleFx, {scope});
  // const setValue = scopeBind(formSSR.setValue);
  // setValue({field: 'profile.firstName', value: 'value form GSSP'});

  // console.log(scope.getState(formSSR.$values));
  return {
    props: {
      store: serialize(scope, {onlyChanges: true}),
    },
  };
};

const Dashboard = () => {
  const ssrData = useStore($ssrData);
  const count = useStore($countFromIndexPage);

  return (
    <Page>
      <h1>SSR</h1>
      <div>count from index page: {count}</div>
      <pre>{JSON.stringify(ssrData, null, '  ')}</pre>

      <SimpleForm />
    </Page>
  );
};

export default Dashboard;
