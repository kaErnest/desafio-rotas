import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.BoxLogo}>
        <img src={Logo} alt="Imagem de logo do site Médicos Voluntários" />
        <Link to="/">Médicos & Dentistas</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/voluntario">Seja Voluntário</Link>
      </nav>
    </header>
  );
};

export default Header;
