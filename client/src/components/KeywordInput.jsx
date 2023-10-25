export default function KeywordInput({ formData, keyword, name, handleCheck }) {
  return (
    <label className={`${styles.label}`}>
      <input
        className={`${styles.input}`}
        type='checkbox'
        value={keyword}
        name={name}
        // Determine checked state based on whether keyword is in state or not
        checked={formData.keywords.some(
          (currentKeyword) => currentKeyword.keyword === keyword
        )}
        onChange={handleCheck}
      />
      <div className={`${styles.keywordBadge}`}>
        <p className={`${styles.keywordText}`}>{keyword}</p>
      </div>
    </label>
  );
}

const styles = {
  label: 'relative cursor-pointer active:scale-[0.9] ease-in-out duration-200',

  input: 'sr-only peer',

  keywordBadge:
    'px-3 py-1 rounded border-2 border-pink peer-checked:bg-pink peer-checked:text-light',

  keywordText: 'text-sm uppercase tracking-wider',

  submitBtn: 'w-full p-2 rounded text-light bg-dark',
};
