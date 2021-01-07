import React from 'react';
import Layout from '../components/Layout';
import StatisticDaily from '../components/Pages/StatisticDaily';
import { StatisticDailyProvider } from '../lib/api/statisticDaily';

export default function StatisticDailyDate() {
  return (
    <Layout background="secondary">
      <StatisticDailyProvider>
        <StatisticDaily />
      </StatisticDailyProvider>
    </Layout>
  );
}
