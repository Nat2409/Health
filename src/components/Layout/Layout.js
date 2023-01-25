import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import styles from './Layout.module.css';

const activeStyle = {
  fontFamily: 'Gotham Pro',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '13.4px',
  textDecoration: 'none',
  color: '#212121',
};
const linkStyle = {
  fontFamily: 'Gotham Pro',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '13.4px',
  textDecoration: 'none',
  color: '#9b9faa',
};

function Layout() {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo}>
            Slim<span className={styles.logo_color}>Mom</span>
          </Link>
          <ul className={styles.navLinks}>
            <li className={styles.navItems}>
              <NavLink
                to="/enter"
                style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
              >
                Вход
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registration"
                style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
              >
                Регистрация
              </NavLink>
            </li>
            <li className={styles.navItems_}>
              <NavLink
                to="/diary"
                style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
              >
                Дневник
              </NavLink>
            </li>
            <li>
              <NavLink
                to="calculator"
                style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
              >
                Калькулятор
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
