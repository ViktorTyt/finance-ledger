import css from "./Header.module.css";
import { ReactComponent as BookIcon } from "../../images/fa-solid_book-open.svg";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerContainer}>
          <a className={css.logo}>
            <BookIcon />
            <span className={css.logoGreen}>Finance</span>
            Leger
          </a>
          <nav className={css.nav}>
            <ul className={css.navList}>
              <li className={css.navItem}>
                <a href="#" className={css.navLink}>
                  Home
                </a>
              </li>
              <li className={css.navItem}>
                <a href="#" className={css.navLink}>
                  About
                </a>
              </li>
              <li className={css.navItem}>
                <a href="#" className={css.navLink}>
                  Cases
                </a>
              </li>
              <li className={css.navItem}>
                <a href="#" className={css.navLink}>
                  Blog
                </a>
              </li>
              <li className={css.navItem}>
                <a href="#" className={css.navLink}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
