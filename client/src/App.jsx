import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Results from './pages/Results';
import CreateForm from './pages/CreateForm';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <Router>
      <div className={`${styles.pageContainer}`}>
        <Header />
        <main className={`${styles.main}`}>
          <Routes>
            <Route path="/" element={<Results />} />
            <Route path="/create" element={<CreateForm />} />
          </Routes>
        </main>
        <ToastContainer autoClose={3000} />
      </div>
    </Router>
  );
}

const styles = {
  pageContainer: 'min-h-screen bg-light',

  main: 'w-[90%] mx-auto grid grid-cols-3 gap-10',

  grid: 'grid grid-cols-3 gap-10',
};
