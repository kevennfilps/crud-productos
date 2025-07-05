import React from "react";
import { Table, Button } from "antd";

const columns = [
  { title: "Nome", dataIndex: "name", key: "name" },
  { title: "Descrição", dataIndex: "description", key: "description" },
  { title: "Categoria", dataIndex: "category", key: "category" },
  { title: "Preço", dataIndex: "price", key: "price", render: (value: number) => `R$ ${value.toFixed(2)}` },
  {
    title: "Ações",
    key: "actions",
    render: (_: any, record: any) => (
      <>
        <Button type="link">Editar</Button>
        <Button type="link" danger>Excluir</Button>
      </>
    ),
  },
];

// Simulação de dados
const data = [
  { key: "1", name: "Produto A", description: "Desc A", category: "Cat 1", price: 10 },
  // ...
];

export default function ProductList() {
  return <Table columns={columns} dataSource={data} style={{ marginTop: 80 }} />;
}
