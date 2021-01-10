import React, { useState } from 'react';

import Loading from '../components/Loading';
import Layout from '../components/Layout';
import Store from '../components/Pages/Store';
import UnauthorizedContainer from '../components/UnauthorizedPage';

export default function Home() {
  const [loading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout background="secondary">
      <UnauthorizedContainer>
        <Store />
      </UnauthorizedContainer>
    </Layout>
  );
}
