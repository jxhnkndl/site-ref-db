import { useState } from 'react';
import { keywords } from '../keywords';

import { toast } from 'react-toastify';
import KeywordInput from './KeywordInput';

export default function CreateForm({ setSubmitted }) {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    url: '',
    keywords: [],
  });

  const handleTextChange = (e) => {
    const input = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [input]: value,
    });
  };

  const handleCheck = (e) => {
    console.log(123)
    const keywordName = e.target.name;
    const keyword = e.target.value;
    const isChecked = e.target.checked;

    // Clone the existing keywords
    const updatedKeywords = [...formData.keywords];

    if (isChecked) {
      console.log('checked')
      // Add keyword if it's been checked
      updatedKeywords.push({ keyword: keyword, name: keywordName })
    } else {
      console.log('unchecked')
      // Remove keyword if it's been unchecked
      const keywordIndex = updatedKeywords.indexOf(keyword);
      updatedKeywords.splice(keywordIndex, 1);
    }

    setFormData({
      ...formData,
      keywords: updatedKeywords
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={`${styles.sidebar}`}>
      <h2 className={`${styles.formHeading}`}>Add Site</h2>
      <form onSubmit={handleSubmit} className={`${styles.formAdd}`}>
        <input
          className={`${styles.input}`}
          name='title'
          type='text'
          placeholder='Site Title'
          value={formData.title}
          onChange={handleTextChange}
        />
        <input
          className={`${styles.input}`}
          name='type'
          type='text'
          placeholder='Site Type'
          value={formData.type}
          onChange={handleTextChange}
        />
        <input
          className={`${styles.input}`}
          name='url'
          type='text'
          placeholder='www.example.com'
          value={formData.url}
          onChange={handleTextChange}
        />

        <div className={`${styles.keywordsContainer}`}>
          {keywords.map((keyword) => (
            <KeywordInput
              key={keyword.name}
              keyword={keyword.keyword}
              name={keyword.name}
              handleCheck={handleCheck}
            />
          ))}
        </div>

        <button className={`${styles.submitBtn}`} type='submit'>
          Add Site
        </button>
      </form>
    </div>
  );
}

const styles = {
  sidebar: 'p-4 mb-6 rounded bg-lighter',

  formHeading:
    'pb-1 mb-4 font-semibold uppercase tracking-wider border-b-[1px] border-b-dark/20',

  input: 'w-full py-1 px-2 mb-4 border-none rounded bg-light',

  keywordsContainer: 'mb-4 flex flex-wrap gap-2',

  submitBtn: 'w-full p-2 rounded text-light bg-dark',
};
