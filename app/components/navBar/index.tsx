import { navMenuItems } from "@/const/enum";
import type { FC } from "react";
import NavLink from "@ui/navLink";
import styles from './navBar.module.css';
import { useLocation } from "react-router";
import clsx from "clsx";
  
const NavBar:FC = () =>{
 const location = useLocation();
 
  return (
    <div className={styles.navigationBarContainer}>
      <nav className={styles.navigationBar}>
        <ul className={styles.navList}>
          {navMenuItems.map((item) => (
            <li key={item.path} className={styles.navItem}>
              { item.label === '-' ?
              <hr/>
              :
              <NavLink
                to={item.path}
                className={clsx(styles.navLink,
                  location.pathname === item.path && styles.active
                )}
              >
                {item.label}
              </NavLink>
              }
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;
