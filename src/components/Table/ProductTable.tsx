import React, { useState } from "react";
import { Table, Button, Pagination } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { type Product } from "../../api/products";
import styles from './ProductTable.module.scss';

interface ProductTableProps {
  products: Product[];
  loading: boolean;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

const PAGE_SIZE = 8;

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  loading,
  onEdit,
  onDelete,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const categoryFilters = Array.from(new Set(products.map((p) => p.category))).map((cat) => ({
    text: cat,
    value: cat,
  }));

  const columns: ColumnsType<Product> = [
    {
      title: "Nome",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Descrição",
      dataIndex: "description",
    },
    {
      title: "Categoria",
      dataIndex: "category",
      filters: categoryFilters,
      onFilter: (value: any, record: Product) => record.category === value,
    },
    {
      title: "Preço",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      render: (value: number) => `R$ ${value.toFixed(2)}`,
    },
    {
      title: "Ações",
      key: "actions",
      render: (_: any, record: Product) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Button
            type="text"
            icon={<EditOutlined style={{ color: "#ff6500", fontSize: 18 }} />}
            onClick={() => onEdit(record)}
            aria-label="Editar"
          />
          <Button
            type="text"
            icon={<DeleteOutlined style={{ color: "#f44336", fontSize: 18 }} />}
            onClick={() => onDelete(record)}
            aria-label="Excluir"
          />
        </div>
      ),
    },
  ];

  const paginatedData = products.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className={styles.tableWrapper} style={{ marginLeft: 32, marginRight: 32 }}>
      <Table
        columns={columns}
        dataSource={paginatedData}
        loading={loading}
        rowKey="id"
        pagination={false}
      />
      <div className={styles.paginationFooter}>
        <Pagination
          current={currentPage}
          pageSize={PAGE_SIZE}
          total={products.length}
          onChange={setCurrentPage}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default ProductTable;
