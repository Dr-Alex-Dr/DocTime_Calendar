import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Sidebar.module.scss';
import CalendarIcon from '../assets/CalendarIcon';
import PatientsIcon from '../assets/PatientsIcon';
import AnalyticsIcon from '../assets/AnalyticsIcon';
import ServicesIcon from '../assets/ServicesIcon';
import SettingsIcon from '../assets/SettingsIcon';

interface MenuItem {
  path: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
}

interface SidebarProps {
  isExpanded: boolean;
  onExpandChange: (expanded: boolean) => void;
}

const menuItems: MenuItem[] = [
  { path: '/', icon: CalendarIcon, text: 'Расписание' },
  { path: '/tasks', icon: PatientsIcon, text: 'Задачи' },
  { path: '/services', icon: ServicesIcon, text: 'Услуги' },
  { path: '/analytics', icon: AnalyticsIcon, text: 'Аналитика' },
  { path: '/settings', icon: SettingsIcon, text: 'Настройки' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isExpanded, onExpandChange }) => {
  return (
    <aside
      className={classNames(styles.sidebar, {
        [styles.expanded]: isExpanded,
        [styles.collapsed]: !isExpanded,
      })}
      onMouseEnter={() => onExpandChange(true)}
      onMouseLeave={() => onExpandChange(false)}
    >
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            classNames(styles.menuItem, {
              [styles.active]: isActive,
            })
          }
        >
          <item.icon className={styles.icon} />
          <span className={styles.text}>{item.text}</span>
        </NavLink>
      ))}
      <div className={classNames(styles.menuItem, styles.fullHeight)}></div>
    </aside>
  );
};
