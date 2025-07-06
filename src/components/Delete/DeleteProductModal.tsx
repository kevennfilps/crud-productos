import React from "react";
import { Modal } from "antd";
import styles from "./DeleteProductModal.module.scss";

interface DeleteProductModalProps {
  open: boolean;
  productName: string;
  onCancel: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

const DeleteProductModal: React.FC<DeleteProductModalProps> = ({
  open,
  productName,
  onCancel,
  onConfirm,
  loading = false,
}) => (
  <Modal
    open={open}
    footer={null}
    onCancel={onCancel}
    centered
    closable
    width={500}
    destroyOnHidden
    styles={{ body: { padding: 28 } }}
  >
    <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>
      Excluir produto:
    </div>
    <div style={{ marginBottom: 22, fontSize: 16 }}>
      Você está prestes a excluir o produto: <b>{productName}</b>
    </div>
    <button
      className={styles.deleteBtn}
      onClick={onConfirm}
      disabled={loading}
      style={{
        width: "100%",
        background: "#ff7900",
        color: "#fff",
        border: "none",
        borderRadius: 7,
        padding: "13px 0",
        fontWeight: 700,
        fontSize: 17,
        cursor: "pointer",
        opacity: loading ? 0.7 : 1,
      }}
    >
      Excluir produto
    </button>
  </Modal>
);

export default DeleteProductModal;
