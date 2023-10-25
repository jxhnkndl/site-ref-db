import { IoMdOpen } from 'react-icons/io';

export default function Site({ site }) {
  const { title, url, keywords } = site;

  const getSiteType = () => {
    const typeObj = keywords.filter(
      (keyword) =>
        keyword.name === 'type-artist' ||
        keyword.name === 'type-producer' ||
        keyword.name === 'type-brand' ||
        keyword.name === 'type-creator'
    );

    if (typeObj) {
      return typeObj[0].keyword;
    } else {
      return 'Other';
    }
  };

  const getTypeColor = (style) => {
    const type = getSiteType();

    if (type === 'Artist' && style === 'text') return 'text-royalBlue'
    if (type === 'Artist' && style === 'bg') return 'bg-royalBlue'
    if (type === 'Producer' && style === 'text') return 'text-pink'
    if (type === 'Producer' && style === 'bg') return 'bg-pink'
    if (type === 'Brand' && style === 'text') return 'text-green'
    if (type === 'Brand' && style === 'bg') return 'bg-green'
    if (type === 'Creator' && style === 'text') return 'text-orange'
    if (type === 'Creator' && style === 'bg') return 'bg-orange'
    if (!type && style === 'text') return 'text-dark'
    if (!type && style === 'bg') return 'bg-dark'
  };

  return (
    <article className={`${styles.card}`}>
      <p className={`${styles.category} ${getTypeColor('text')}`}>{getSiteType()}</p>
      <a
        href={url}
        target='_blank'
        rel='noreferrer'
        className={`${styles.title}`}>
        {title}
      </a>
      <div className={`${styles.keywords}`}>
        {keywords &&
          keywords.map((keyword) => (
            <button
              key={`${site._id}-${keyword.name}`}
              className={`${styles.badge} ${getTypeColor('bg')}`}>
              {keyword.keyword}
            </button>
          ))}
      </div>
      <IoMdOpen className={`${styles.icon}`} />
    </article>
  );
}

const styles = {
  card: 'p-4 mb-4 relative rounded bg-lighter',

  title: 'text-3xl font-bold uppercase tracking-wider hover:opacity-60',

  category: 'mb-1 text-sm font-bold uppercase tracking-widest',

  keywords: 'mt-4 flex flex-wrap',

  badge:
    'py-1 px-2 mr-1 mb-2 rounded-xl text-xs text-light cursor-pointer',

  icon: 'absolute top-0 right-0 m-3 text-2xl hover:opacity-60 cursor-pointer',
};
