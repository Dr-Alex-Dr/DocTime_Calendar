import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../widget/Header';

export const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
