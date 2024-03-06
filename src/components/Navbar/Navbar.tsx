import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav className={styles.links}>
        <Link to="/">Product catalog</Link>
        <Link to="/new">Add new product</Link>
        <Link to="#">
          <TiShoppingCart size={32} />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
