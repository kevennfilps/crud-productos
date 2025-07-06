import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductList from "../Products/ProductList";
import styles from './MainPage.module.scss';
import { useEffect, useState } from "react";
import { getUserFromStorage } from "../../utils/getUserFromStorage";
import { Button, Modal } from "antd";

export default function MainPage() {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  useEffect(() => {
    const storedUser = getUserFromStorage();
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleRequestLogout = () => setIsLogoutModalOpen(true);

  const handleCancelLogout = () => setIsLogoutModalOpen(false);

  return (
    <div className={styles.mainBg}>
      <Header
        userName={user?.username || ""}
        onRequestLogout={handleRequestLogout}
        logo={<img src="/logo.png" alt="Logo" style={{ width: 100 }} />}
        avatarUrl="/b7d064e5-0779-4a34-8373-c982f3d3fbc5.png"
      />
      <Modal
        title="Sair do sistema"
        open={isLogoutModalOpen}
        footer={[
          <Button
            key="cancel"
            onClick={handleCancelLogout}
            style={{
              background: "#fff7f0",
              border: "2px solid #ff6500",
              color: "#ff6500",
              fontWeight: "bold",
              borderRadius: 10,
              padding: "8px 32px",
              marginRight: 16,
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "#ffe5cc";
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "#fff7f0";
            }}
          >
            CANCELAR
          </Button>,
          <Button
            key="logout"
            onClick={handleLogout}
            type="primary"
            style={{
              background: "#ff6500",
              border: "2px solid #ff6500",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: 10,
              padding: "8px 32px",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "#d95a00";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#d95a00";
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "#ff6500";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#ff6500";
            }}
          >
            SAIR
          </Button>
        ]}
        closable={false}
      >
        <p>Deseja realmente sair do sistema?</p>
      </Modal>
      <div className={styles.content}>
        <ProductList />
      </div>
    </div>
  );
}
