import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductList from "../Products/ProductList";
import styles from './MainPage.module.scss';

export default function MainPage() {
  const userName = "Usuário Exemplo";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className={styles.mainBg}>
      <Header
        userName={userName}
        onLogout={handleLogout}
        logo={<img src="/logo.png" alt="Logo" style={{ width: 100 }} />}
      />
      <div className={styles.content}>
        <ProductList />
      </div>
    </div>
  );
}
