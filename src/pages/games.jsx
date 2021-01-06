import React, { useState } from 'react';

import Loading from '../components/Loading';
import Layout from '../components/Layout';
import Games from '../components/Pages/Games';
import {GamesProvider} from "../lib/api/games";

export default function GamesContainer() {
  const [loading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout background="secondary">
      <GamesProvider>
        <Games />
      </GamesProvider>
    </Layout>
  );
}
