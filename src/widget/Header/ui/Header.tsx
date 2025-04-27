import React from 'react';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Healpy</h1>
    </header>
  );
};
