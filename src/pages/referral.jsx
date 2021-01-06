import React, { useState } from 'react';

import Loading from '../components/Loading';
import Layout from '../components/Layout';
import Referral from '../components/Pages/Referral';

export default function ReferralContainer() {
  const [loading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout background="secondary">
      <Referral />
    </Layout>
  );
}
