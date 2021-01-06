import React, { useState } from 'react';

import Loading from '../components/Loading';
import Layout from '../components/Layout';
import Cases from '../components/Pages/Cases';
import {CasesProvider} from "../lib/api/cases";

export default function CasesContainer() {
  const [loading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout background="secondary">
      <CasesProvider>
        <Cases />
      </CasesProvider>
    </Layout>
  );
}
