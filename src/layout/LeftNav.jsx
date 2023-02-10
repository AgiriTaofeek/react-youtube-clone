import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import LeftNavMenuItem from './../components/LeftNavMenuItem';
import { categories } from '../data/iconsData';
import { Context } from '../context/apiContext';

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case 'category':
        return setSelectCategories(name);
      case 'home':
        return setSelectCategories(name);
      case 'menu':
        return false;
      default:
        break;
    }
  };
  return (
    <aside className="md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[240] md:translate-x-0 transition-all">
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          const { type, name, icon } = item;
          return (
            <React.Fragment key={name}>
              <LeftNavMenuItem
                text={type === 'home' ? 'Home' : name}
                icon={icon}
                action={() => {
                  clickHandler(name, type);
                  navigate('/');
                }}
                className={`${
                  selectCategories === name ? 'bg-white/[0.15]' : ''
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <p className="text-white/[0.5] text-[12px]">Cloned by Agiri Taofeek</p>
      </div>
    </aside>
  );
};

export default LeftNav;
