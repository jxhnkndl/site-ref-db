import { useState, useEffect } from 'react';

import Header from './components/Header';
import CreateForm from './components/CreateForm';
import Site from './components/Site';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    const fetchSites = async () => {
      const res = await fetch('/api/sites');
      const data = await res.json();
      setSites(data);
    };

    fetchSites();
  }, []);

  return (
    <div className={`${styles.pageContainer}`}>
      <Header />
      <main className={`${styles.main}`}>
        <aside className={`${styles.sidebar}`}>
          <CreateForm />
        </aside>
        <section className={`${styles.results}`}>
          <h2 className={`${styles.h2}`}>Results</h2>
          {sites && sites.map((site) => <Site key={site._id} site={site} />)}
        </section>
      </main>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

const styles = {
  pageContainer: 'min-h-screen bg-light',

  main: 'w-[90%] mx-auto grid grid-cols-3 gap-10',

  grid: 'grid grid-cols-3 gap-10',

  sidebar: 'col-span-1',

  results: 'col-span-2',

  h2: 'pb-2 mb-6 border-b-2 border-b-dark/20 text-4xl font-bold uppercase tracking-widest',
};
