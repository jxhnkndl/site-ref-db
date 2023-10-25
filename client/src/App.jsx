import CreateForm from "./components/CreateForm";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className={`${styles.pageContainer}`}>
      <Header />
      <main className={`${styles.main}`}>
        <aside className={`${styles.sidebar}`}>
          <CreateForm />
        </aside>
        <section className={`${styles.results}`}>
          <h2 className={`${styles.h2}`}>Results</h2>
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
}
