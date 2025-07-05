import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import styles from "./CustomSearchInput.module.scss";

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  width?: number | string;
}

const CustomSearchInput: React.FC<Props> = ({
  value,
  onChange,
  onSearch,
  placeholder = "Pesquisar...",
  width = 220,
}) => {
  return (
    <div className={styles.searchWrapper} style={{ width }}>
      <input
        type="text"
        className={styles.searchInput}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onSearch) onSearch(e.currentTarget.value);
        }}
      />
      <button
        className={styles.searchBtn}
        type="button"
        tabIndex={-1}
        onClick={() => onSearch?.(value || "")}
      >
        <SearchOutlined />
      </button>
    </div>
  );
};

export default CustomSearchInput;
