import React, { useState } from 'react';

import Loading from '../components/Loading';
import Layout from '../components/Layout';
import Index from '../components/Pages/Index';

export default function Home() {
  const [loading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout background="secondary">
      <Index />
    </Layout>
  );
}
