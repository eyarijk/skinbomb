import React from 'react';

import Layout from '../components/Layout';
import Leaders from '../components/Pages/Leaders';
import { LeadersProvider } from '../lib/api/leaders';

export default function LeadersContainer() {
  return (
    <Layout background="secondary">
      <LeadersProvider>
        <Leaders />
      </LeadersProvider>
    </Layout>
  );
}
