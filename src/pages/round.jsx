import React from 'react';
import Layout from '../components/Layout';
import RoundPage from '../components/Pages/Round';
import { RoundProvider } from '../lib/api/round';

export default function StatisticDailyDate() {
  return (
    <Layout background="secondary">
      <RoundProvider>
        <RoundPage />
      </RoundProvider>
    </Layout>
  );
}
