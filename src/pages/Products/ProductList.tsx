import React, { useEffect, useState } from "react";
import { message, Modal } from "antd";
import ProductToolbar from "../../components/Products/ProductToolbar";
import ProductTable from "../../components/Table/ProductTable";
import { getProducts, deleteProduct, type Product } from "../../api/products";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch {
      message.error("Erro ao buscar produtos.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    message.info("Abrir modal de cadastro");
  };

  const handleEdit = (product: Product) => {
    message.info(`Editar produto: ${product.name}`);
  };

  const handleDelete = (product: Product) => {
    Modal.confirm({
      title: "Excluir produto",
      content: `Tem certeza que deseja excluir "${product.name}"?`,
      okText: "Sim",
      okType: "danger",
      cancelText: "Cancelar",
      onOk: async () => {
        try {
          await deleteProduct(product.id);
          message.success("Produto excluído!");
          fetchProducts();
        } catch {
          message.error("Erro ao excluir produto.");
        }
      },
    });
  };

  return (
    <div>
      <ProductToolbar onAdd={handleAdd} onSearch={setSearch} searchValue={search}/>
      <ProductTable
        products={filteredProducts}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ProductList;
