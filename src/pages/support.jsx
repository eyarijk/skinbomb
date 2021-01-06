import React, { useState } from 'react';

import Loading from '../components/Loading';
import Layout from '../components/Layout';
import Support from '../components/Pages/Support';
import {SupportProvider} from "../lib/api/support";

export default function SupportContainer() {
  const [loading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout background="secondary">
      <SupportProvider>
        <Support />
      </SupportProvider>
    </Layout>
  );
}
