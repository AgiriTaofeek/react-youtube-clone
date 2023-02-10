import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { Context } from '../context/apiContext';

import { SlMenu } from 'react-icons/sl';
import { IoIosSearch } from 'react-icons/io';
import { RiVideoAddLine } from 'react-icons/ri';
import { FiBell } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';

import ytLogo from '../assets/images/yt-logo.png';
import ytLogoMobile from '../assets/images/yt-logo-mobile.png';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();
  const searchQueryHandler = (e) => {
    if (
      (e?.key === 'Enter' || e === 'searchButton') &&
      searchQuery?.length > 0
    ) {
      navigate(`/search-result/${searchQuery}`);
    }
  };

  const mobileMenuToggleHandler = () => {
    setMobileMenu((prevState) => !prevState);
  };

  const { pathname } = useLocation();

  //* Split the pathname by slash "/" and save the elements in an array, filter out any falsy value from the array produced from the split method
  const pageName = pathname?.split('/')?.filter((item) => Boolean(item))?.[0];

  return (
    <header className="header">
      {loading && <Loader />}
      <div className="flex h-5 items-center ">
        {pageName !== 'video' && (
          <div className="menu-icon-wrapper" onClick={mobileMenuToggleHandler}>
            {mobileMenu ? (
              <CgClose
                className="text-white
             text-xl"
              />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center ">
          <img
            src={ytLogo}
            alt="Youtube"
            className="h-full hidden dark:md:block"
          />
          <img src={ytLogoMobile} alt="Youtube" className="h-full md:hidden" />
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="wrapper-search-input">
          <div className="w-10 items-center justify-center hidden md:group-focus-within:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="search-input"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
            placeholder="Search"
          />
        </div>
        <button type="button" className="btn-search-input">
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex ">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
            <img src={ytLogo} alt="profile" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
