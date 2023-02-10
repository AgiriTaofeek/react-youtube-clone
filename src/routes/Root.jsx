import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../layout/Header';

const Root = () => {

  return (
    <div className="flex flex-col h-full">
          <Header />
          <Outlet/>
    </div>
  );
};

export default Root;
