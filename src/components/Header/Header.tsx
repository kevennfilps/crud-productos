import React from "react";
import { Avatar, Dropdown} from "antd";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import styles from "./Header.module.scss";

interface HeaderProps {
  userName: string;
  onRequestLogout: () => void;
  logo: React.ReactNode;
  avatarUrl?: string;
}

const Header: React.FC<HeaderProps> = ({ userName, onRequestLogout, logo, avatarUrl  }) => {
  const menuItems = [
    {
      key: 'logout',
      label: (
        <span onClick={onRequestLogout} style={{ display: "flex", alignItems: "center" }}>
          <LogoutOutlined style={{ marginRight: 8 }} />
          Sair
        </span>
      ),
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>{logo}</div>
      <Dropdown menu={{ items: menuItems }} placement="bottomRight" trigger={["click"]}>
        <div className={styles.userMenu} tabIndex={0} role="button">
          <Avatar src={avatarUrl || "/user-avatar.png"} size={36} />
          <span className={styles.userName}>{userName}</span>
          <DownOutlined className={styles.orangeArrow} />
        </div>
      </Dropdown>
    </header>
  );
};

export default Header;
