import React, { useEffect, useState } from "react";
import { message } from "antd";
import ProductToolbar from "../../components/Products/ProductToolbar";
import ProductTable from "../../components/Table/ProductTable";
import { getProducts} from "../../api/products";
import ProductFormModal, { type ProductFormFields } from "../../components/Products/Modal/ProductFormModal";
import * as productApi from "../../api/products";
import { notify } from "../../components/Notification/Notification";
import DeleteProductModal from "../../components/Delete/DeleteProductModal";

const CATEGORIES = [
  "category 1",
  "category 2",
  "category 3",
  "category 4",
];

export interface Product extends ProductFormFields {
  id: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

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

  function handleEditProduct(product: Product) {
    setEditingProduct(product);
    setModalVisible(true);
  }

  function handleOpenCreate() {
    setEditingProduct(null);
    setModalVisible(true);
  }

  function handleAskDeleteProduct(product: Product) {
    setProductToDelete(product);
    setDeleteModalOpen(true);
  }

  async function handleSaveProduct(data: ProductFormFields) {
    setLoading(true);
  try {
    const payload = {
      ...data,
      price: Number(data.price) || 0,
    };

    if (editingProduct) {
      await productApi.updateProduct(editingProduct.id, payload);
      notify("success", `Produto: ${data.name}!`, "Produto editado com sucesso!");
    } else {
      await productApi.createProduct(payload);
      console.log("Produto criado com sucesso!", data.name);
      notify("success", `Produto: ${data.name}!`, "Produto criado com sucesso!");
    }
    setModalVisible(false);
    fetchProducts();
  } catch {
    notify("error", `Produto: ${data.name}!`, "Erro ao salvar produto");
  }
    setLoading(false);
  }

  async function handleConfirmDeleteProduct() {
    if (!productToDelete) return;
    setLoading(true);
    try {
      await productApi.deleteProduct(productToDelete.id);
      setDeleteModalOpen(false);
      setProductToDelete(null);
      notify("success", `Produto: ${productToDelete.name}!`, "Produto excluido com sucesso!");
      fetchProducts();
    } catch {
      alert("Erro ao excluir produto");
    }
    setLoading(false);
  }

  return (
    <div>
      <ProductToolbar 
        onAdd={handleOpenCreate}
        onSearch={setSearch} 
        searchValue={search}
      />
      <ProductTable
        products={filteredProducts}
        loading={loading}
        onEdit={handleEditProduct}
        onDelete={handleAskDeleteProduct}
      />
      <ProductFormModal
        open={modalVisible}
        title={editingProduct ? "Editar Produto" : "Novo Produto"}
        initialData={editingProduct ?? undefined}
        categories={CATEGORIES}
        onCancel={() => setModalVisible(false)}
        onSubmit={handleSaveProduct}
      />
      <DeleteProductModal
        open={deleteModalOpen}
        productName={productToDelete?.name || ""}
        onCancel={() => { setDeleteModalOpen(false); setProductToDelete(null); }}
        onConfirm={handleConfirmDeleteProduct}
        loading={loading}
      />
    </div>
  );
};

export default ProductList;
