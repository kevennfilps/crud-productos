import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./CustomAddButton.module.scss";

interface Props {
  onClick: () => void;
  children?: React.ReactNode;
}

const CustomAddButton: React.FC<Props> = ({ onClick, children }) => (
  <button className={styles.addBtn} onClick={onClick}>
    <PlusOutlined style={{ fontSize: 18, marginRight: 8 }} />
    {children || "ADICIONAR"}
  </button>
);

export default CustomAddButton;
