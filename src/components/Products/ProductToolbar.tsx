import React from "react";
import CustomAddButton from "../Button/CustomAddButton";
import CustomSearchInput from "../Search/CustomSearchInput";

interface ProductToolbarProps {
  onAdd: () => void;
  onSearch: (value: string) => void;
  searchValue: string;
}

const ProductToolbar: React.FC<ProductToolbarProps> = ({ onAdd, onSearch, searchValue }) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 12,
            marginBottom: 16,
            marginRight: 33,
        }}>
            <CustomSearchInput
                value={searchValue}
                onChange={e => onSearch(e.target.value)}
                onSearch={onSearch}
                placeholder="Pesquisar produto ou descrição"
                width={279}
            />
            <CustomAddButton onClick={onAdd} />
        </div>
    );
};

export default ProductToolbar;
