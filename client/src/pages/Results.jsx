import React from 'react';

import Site from '../components/Site';

export default function Results({ sites }) {
  return (
    <>
      <aside className={`${styles.sidebar}`}>COMING SOON</aside>
      <section className={`${styles.results}`}>
        <h2 className={`${styles.h2}`}>Results</h2>
        {sites && sites.map((site) => <Site key={site._id} site={site} />)}
      </section>
    </>
  );
}

const styles = {
  sidebar: 'col-span-1',

  results: 'col-span-2',

  h2: 'pb-2 mb-6 border-b-2 border-b-dark/20 text-4xl font-bold uppercase tracking-widest',
}