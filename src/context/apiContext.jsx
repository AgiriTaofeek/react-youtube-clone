import { createContext, useState, useEffect } from 'react';
import { fetchDataYoutubeApi } from '../services/api';

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategories, setSelectCategories] = useState('New');
  const [mobileMenu, setMobileMenu] = useState(false);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    (async () => {
      const res = await fetchDataYoutubeApi(`search/?q=${query}`);
      const { contents } = res;
      // console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    })();

    // fetchDataYoutubeApi(`search/?q=${query}`).then((res) => {
    //   console.log(res);
    //   // setSearchResults(res);
    //   setLoading(false);
    // });
  };

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};
