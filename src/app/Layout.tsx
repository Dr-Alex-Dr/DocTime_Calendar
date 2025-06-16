import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../widget/Header';
import { Sidebar } from '../widget/Sidebar';
import classNames from 'classnames';
import styles from './Layout.module.scss';

export const Layout: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.layout}>
      <Header />
      <Sidebar isExpanded={isExpanded} onExpandChange={setIsExpanded} />
      <main className={classNames(styles.main, { [styles.expanded]: isExpanded })}>
        <Outlet />
      </main>
    </div>
  );
};
