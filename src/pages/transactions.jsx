import React, { useState } from 'react';

import Loading from '../components/Loading';
import Layout from '../components/Layout';
import Transactions from '../components/Pages/Transactions';
import {TransactionsProvider} from "../lib/api/transactions";

export default function TransactionsContainer() {
  const [loading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout background="secondary">
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </Layout>
  );
}
