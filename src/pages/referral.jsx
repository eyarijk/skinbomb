import React, { useState } from 'react';

import Loading from '../components/Loading';
import Layout from '../components/Layout';
import Referral from '../components/Pages/Referral';
import UnauthorizedContainer from "../components/UnauthorizedPage";

export default function ReferralContainer() {
  const [loading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout background="secondary">
      <UnauthorizedContainer>
        <Referral />
      </UnauthorizedContainer>
    </Layout>
  );
}
