import { Link } from 'react-router-dom';

import { IoIosAddCircle } from 'react-icons/io';

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.container}`}>
        <Link className={`${styles.brandLink}`} to='/'>
          <h1 className={`${styles.h1}`}>
            <span className={`${styles.echo}`}>echo</span>DB
          </h1>
        </Link>
        <Link className={`${styles.navLink}`} to='/create'>
          Add Site
          <IoIosAddCircle className={`${styles.icon}`} />
        </Link>
      </div>
    </header>
  );
}

const styles = {
  header: 'py-4 mb-6 text-2xl text-light bg-dark',

  container: 'w-[90%] mx-auto flex justify-between items-center',

  brandLink: 'hover:opacity-80 ease-out duration-[150ms]',

  echo: 'font-normal',

  h1: 'font-bold',

  navLink:
    'flex justify-center items-center text-base hover:opacity-80 ease-out duration-[150ms]',

  icon: 'inline ml-1 text-light',
};
