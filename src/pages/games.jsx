import React from 'react';

import Layout from '../components/Layout';
import Games from '../components/Pages/Games';
import { GamesProvider } from '../lib/api/games';

export default function GamesContainer() {
  return (
    <Layout background="secondary">
      <GamesProvider>
        <Games />
      </GamesProvider>
    </Layout>
  );
}
