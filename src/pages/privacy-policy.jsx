import React, { useState } from 'react';

import Loading from '../components/Loading';
import Layout from '../components/Layout';
import PrivacyPolicy from '../components/Pages/PrivacyPolicy';

export default function Page() {
  const [loading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout background="secondary">
      <PrivacyPolicy />
    </Layout>
  );
}
