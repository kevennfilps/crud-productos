import React from "react";
import { Dropdown, Space } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./Header.module.scss";

interface HeaderProps {
  userName: string;
  onLogout: () => void;
  logo: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ userName, onLogout, logo }) => {
  const menuItems = [
    {
      key: 'logout',
      label: (
        <span onClick={onLogout} style={{ display: "flex", alignItems: "center" }}>
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
          <Space>
            <UserOutlined />
            {userName}
          </Space>
        </div>
      </Dropdown>
    </header>
  );
};

export default Header;
