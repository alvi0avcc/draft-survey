import { navMenuItems } from '@/const/enum';
import type { FC } from 'react';
import NavLink from '@ui/navLink';
import clsx from 'clsx';
import { useLocation } from 'react-router';
import styles from './navBar.module.css';

const NavBar: FC = () => {
  const location = useLocation();

  return (
    <div className={styles.navigationBarContainer}>
      <nav className={styles.navigationBar}>
        <ul className={styles.navList}>
          {navMenuItems.map(item => (
            <li key={item.path} className={styles.navItem}>
              {item.label === '-' ? (
                <hr />
              ) : (
                <NavLink
                  to={item.path}
                  className={clsx(
                    styles.navLink,
                    location.pathname === item.path && styles.active
                  )}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
