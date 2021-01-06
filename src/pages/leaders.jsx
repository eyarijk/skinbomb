import React, { useState } from 'react';

import Loading from '../components/Loading';
import Layout from '../components/Layout';
import Leaders from '../components/Pages/Leaders';
import {LeadersProvider} from "../lib/api/leaders";

export default function LeadersContainer() {
  const [loading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout background="secondary">
      <LeadersProvider>
        <Leaders />
      </LeadersProvider>
    </Layout>
  );
}
