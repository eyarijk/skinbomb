import React, { useState } from 'react';

import Loading from '../components/Loading';
import Layout from '../components/Layout';
import TopUp from '../components/Pages/TopUp';
import {TopUpProvider} from "../lib/api/top-up";
import UnauthorizedContainer from "../components/UnauthorizedPage";

export default function Home() {
  const [loading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout background="secondary">
      <TopUpProvider>
          <UnauthorizedContainer>
            <TopUp />
          </UnauthorizedContainer>
      </TopUpProvider>
    </Layout>
  );
}
