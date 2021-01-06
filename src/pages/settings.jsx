import React, { useState } from 'react';

import Loading from '../components/Loading';
import Layout from '../components/Layout';
import Settings from '../components/Pages/Settings';

export default function SettingsContainer() {
  const [loading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout background="secondary">
      <Settings />
    </Layout>
  );
}
