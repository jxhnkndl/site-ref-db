import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  categories,
  themes,
  colors,
  fonts,
  logoType,
  animations,
  pages,
  navType,
  ctas,
  heroType,
  sections,
  contactOptions,
  siteStyles,
  quality,
} from '../keywords';

import { toast } from 'react-toastify';
import KeywordInput from '../components/KeywordInput';

export default function CreateForm() {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    keywords: [],
  });

  const navigate = useNavigate();

  const handleTextChange = (e) => {
    const input = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [input]: value,
    });
  };

  const handleCheck = (e) => {
    const keywordName = e.target.name;
    const keyword = e.target.value;
    const isChecked = e.target.checked;

    // Clone the existing keywords
    const updatedKeywords = [...formData.keywords];

    if (isChecked) {
      // Add keyword if it's been checked
      updatedKeywords.push({ keyword: keyword, name: keywordName });
    } else {
      // Remove keyword if it's been unchecked by finding index of removed keyword in
      // keywords array and splicing it out
      const keywordIndex = updatedKeywords.findIndex(
        (currentKeyword) => currentKeyword.keyword === keyword
      );

      if (keywordIndex !== -1) {
        updatedKeywords.splice(keywordIndex, 1);
      }
    }

    setFormData({
      ...formData,
      keywords: updatedKeywords,
    });

    console.log(keyword);
    console.log(isChecked);
  };

  const validateURL = (url) => {
    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return urlRegex.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { url, title, keywords } = formData;
    const isValidURL = validateURL(url);

    if (!url) {
      toast.error('Please include a URL 👀', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    if (!isValidURL) {
      toast.error('Please include a valid URL 👀', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    if (!title) {
      toast.error('Please include a site title 👀', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const newSite = {
      url,
      title,
      keywords,
    };

    try {
      const res = await fetch('/api/sites', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newSite),
      });

      const data = await res.json();

      console.log(data)

      if (data?.error?.code === 11000) {
        toast.error('Website already exists in database', {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }

      toast.success('Site created 🚀', {
        position: toast.POSITION.TOP_RIGHT,
      });

      setFormData({
        url: '',
        title: '',
        keywords: [],
      });

      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error('Oh no! Something went wrong!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className={`${styles.formContainer}`}>
      <h2 className={`${styles.formHeading}`}>Add Site</h2>
      <form onSubmit={handleSubmit} className={`${styles.formAdd}`}>
        {/* URL */}
        <input
          className={`${styles.input}`}
          name='url'
          type='text'
          placeholder='https://www.example.com'
          value={formData.url}
          onChange={handleTextChange}
        />
        {/* TITLE */}
        <input
          className={`${styles.input}`}
          name='title'
          type='text'
          placeholder='Site Title'
          value={formData.title}
          onChange={handleTextChange}
        />
        {/* CATEGORIES */}
        <h3 className={`${styles.formHeading}`}>Site Categories</h3>
        <div className={`${styles.keywordsContainer}`}>
          {categories.map((keyword) => (
            <KeywordInput
              key={keyword.name}
              keyword={keyword.keyword}
              name={keyword.name}
              formData={formData}
              handleCheck={handleCheck}
            />
          ))}
        </div>

        {/* THEMES */}
        <h3 className={`${styles.formHeading}`}>Site Theme</h3>
        <div className={`${styles.keywordsContainer}`}>
          {themes.map((keyword) => (
            <KeywordInput
              key={keyword.name}
              keyword={keyword.keyword}
              name={keyword.name}
              formData={formData}
              handleCheck={handleCheck}
            />
          ))}
        </div>

        {/* COLORS */}
        <h3 className={`${styles.formHeading}`}>Color Palette</h3>
        <div className={`${styles.keywordsContainer}`}>
          {colors.map((keyword) => (
            <KeywordInput
              key={keyword.name}
              keyword={keyword.keyword}
              name={keyword.name}
              formData={formData}
              handleCheck={handleCheck}
            />
          ))}
        </div>

        {/* FONTS */}
        <h3 className={`${styles.formHeading}`}>Font Families</h3>
        <div className={`${styles.keywordsContainer}`}>
          {fonts.map((keyword) => (
            <KeywordInput
              key={keyword.name}
              keyword={keyword.keyword}
              name={keyword.name}
              formData={formData}
              handleCheck={handleCheck}
            />
          ))}
        </div>

        {/* LOGO TYPE */}
        <h3 className={`${styles.formHeading}`}>Logo Type</h3>
        <div className={`${styles.keywordsContainer}`}>
          {logoType.map((keyword) => (
            <KeywordInput
              key={keyword.name}
              keyword={keyword.keyword}
              name={keyword.name}
              formData={formData}
              handleCheck={handleCheck}
            />
          ))}
        </div>

        {/* ANIMATIONS */}
        <h3 className={`${styles.formHeading}`}>Animations</h3>
        <div className={`${styles.keywordsContainer}`}>
          {animations.map((keyword) => (
            <KeywordInput
              key={keyword.name}
              keyword={keyword.keyword}
              name={keyword.name}
              formData={formData}
              handleCheck={handleCheck}
            />
          ))}
        </div>

        {/* PAGES */}
        <h3 className={`${styles.formHeading}`}>Pages</h3>
        <div className={`${styles.keywordsContainer}`}>
          {pages.map((keyword) => (
            <KeywordInput
              key={keyword.name}
              keyword={keyword.keyword}
              name={keyword.name}
              formData={formData}
              handleCheck={handleCheck}
            />
          ))}
        </div>

        {/* PAGES */}
        <h3 className={`${styles.formHeading}`}>Nav Type</h3>
        <div className={`${styles.keywordsContainer}`}>
          {navType.map((keyword) => (
            <KeywordInput
              key={keyword.name}
              keyword={keyword.keyword}
              name={keyword.name}
              formData={formData}
              handleCheck={handleCheck}
            />
          ))}
        </div>

        {/* PAGES */}
        <h3 className={`${styles.formHeading}`}>CTAs</h3>
        <div className={`${styles.keywordsContainer}`}>
          {ctas.map((keyword) => (
            <KeywordInput
              key={keyword.name}
              keyword={keyword.keyword}
              name={keyword.name}
              formData={formData}
              handleCheck={handleCheck}
            />
          ))}
        </div>

        {/* PAGES */}
        <h3 className={`${styles.formHeading}`}>Hero Type</h3>
        <div className={`${styles.keywordsContainer}`}>
          {heroType.map((keyword) => (
            <KeywordInput
              key={keyword.name}
              keyword={keyword.keyword}
              name={keyword.name}
              formData={formData}
              handleCheck={handleCheck}
            />
          ))}
        </div>

        {/* SECTIONS */}
        <h3 className={`${styles.formHeading}`}>Page Sections</h3>
        <div className={`${styles.keywordsContainer}`}>
          {sections.map((keyword) => (
            <KeywordInput
              key={keyword.name}
              keyword={keyword.keyword}
              name={keyword.name}
              formData={formData}
              handleCheck={handleCheck}
            />
          ))}
        </div>

        {/* CONTACT OPTIONS */}
        <h3 className={`${styles.formHeading}`}>Contact Options</h3>
        <div className={`${styles.keywordsContainer}`}>
          {contactOptions.map((keyword) => (
            <KeywordInput
              key={keyword.name}
              keyword={keyword.keyword}
              name={keyword.name}
              formData={formData}
              handleCheck={handleCheck}
            />
          ))}
        </div>

        {/* SITE STYLES */}
        <h3 className={`${styles.formHeading}`}>Site Styles</h3>
        <div className={`${styles.keywordsContainer}`}>
          {siteStyles.map((keyword) => (
            <KeywordInput
              key={keyword.name}
              keyword={keyword.keyword}
              name={keyword.name}
              formData={formData}
              handleCheck={handleCheck}
            />
          ))}
        </div>

        {/* QUALITY */}
        <h3 className={`${styles.formHeading}`}>Perceived Quality</h3>
        <div className={`${styles.keywordsContainer} mb-10`}>
          {quality.map((keyword) => (
            <KeywordInput
              key={keyword.name}
              keyword={keyword.keyword}
              name={keyword.name}
              formData={formData}
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
  formContainer: 'col-span-3 w-3/4 p-4 mx-auto mb-6 rounded bg-lighter',

  formHeading:
    'pb-1 mb-4 font-semibold uppercase tracking-wider border-b-[1px] border-b-dark/20',

  input: 'w-full py-1 px-2 mb-4 border-none rounded bg-light',

  keywordsContainer: 'mb-4 flex flex-wrap gap-2',

  submitBtn: 'w-full p-2 rounded text-light bg-dark',
};
