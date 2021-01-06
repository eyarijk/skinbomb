import React, { useState } from 'react';

import Loading from '../components/Loading';
import Layout from '../components/Layout';
import ProvablyFairness from '../components/Pages/ProvablyFairness';

export default function ProvablyFairnessContainer() {
  const [loading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout background="secondary">
      <ProvablyFairness />
    </Layout>
  );
}
