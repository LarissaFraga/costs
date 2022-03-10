import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
        <Container className={styles.div_container}>
          <Link to="/">
            <img src={logo} alt="costs logo" />
          </Link>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
              <Link to="/projects">Projects</Link>
            </li>
            <li className={styles.item}>
              <Link to="/contact">Contact</Link>
            </li>
            <li className={styles.item}>
              <Link to="/company">Company</Link>
            </li>
          </ul>
        </Container>
    </div>
  );
}

export default Navbar;
