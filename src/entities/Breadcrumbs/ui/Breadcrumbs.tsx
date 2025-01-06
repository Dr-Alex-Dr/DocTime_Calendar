import React from 'react';
import styles from './Breadcrumbs.module.scss';

export interface IBreadcrumbsParams {
  title: string;
}

export const Breadcrumbs: React.FC<IBreadcrumbsParams> = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};
