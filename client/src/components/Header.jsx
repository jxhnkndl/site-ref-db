export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.container}`}>
        <h1 className={`${styles.h1}`}>
          <span className={`${styles.echo}`}>echo</span>DB
        </h1>
      </div>
    </header>
  );
}

const styles = {
  header: 'py-4 mb-6 text-2xl text-light bg-dark',

  container: 'w-[90%] mx-auto flex justify-between items-center',

  echo: 'font-normal',

  h1: 'font-bold',
};
