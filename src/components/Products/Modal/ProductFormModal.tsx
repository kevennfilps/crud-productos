import React from "react";
import styles from "./ProductFormModal.module.scss"; // crie um SCSS nesse padrão
import { Modal } from "antd";

interface ProductFormModalProps {
  open: boolean;
  title: string;
  initialData?: ProductFormFields;
  categories: string[];
  onCancel: () => void;
  onSubmit: (data: ProductFormFields) => void;
}

export interface ProductFormFields {
  name: string;
  description?: string;
  price: number;
  category: string;
}

const ProductFormModal: React.FC<ProductFormModalProps> = ({
  open,
  title,
  initialData,
  categories,
  onCancel,
  onSubmit,
}) => {
  const [fields, setFields] = React.useState<ProductFormFields>({
    name: "",
    description: "",
    price: 0,
    category: "",
  });

  React.useEffect(() => {
    if (initialData) setFields(initialData);
    else setFields({ name: "", description: "", price: 0, category: "" });
  }, [open, initialData]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: name === "price" ? value.replace(",", ".") : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fields.name || !fields.category || !fields.price || Number(fields.price) <= 0) return;
    onSubmit({
      ...fields,
      price: Number(fields.price),
    });
  }

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      title={<span className={styles.title}>{title}</span>}
      width={800}
      style={{ border: "3px solid #ff7900", borderRadius: 12}}
      destroyOnClose
      bodyStyle={{ padding: 40 }}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label>Nome*</label>
            <input
              name="name"
              value={fields.name}
              onChange={handleChange}
              required
              maxLength={120}
              autoFocus
              placeholder="Digite o nome do produto"
            />
          </div>
          <div className={styles.field}>
            <label>Categoria*</label>
            <select
              name="category"
              value={fields.category}
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              {categories.map((cat) => (
                <option value={cat} key={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label>Preço*</label>
            <input
              name="price"
              type="number"
              min={0.01}
              step={0.01}
              value={fields.price === 0 ? "" : fields.price}
              onChange={e => setFields(f => ({
                ...f,
                price: Number(e.target.value),
              }))}
              required
              placeholder="0.00"
            />
          </div>
          <div className={styles.field}>
            <label>Descrição</label>
            <textarea
              name="description"
              value={fields.description}
              onChange={handleChange}
              rows={3}
              maxLength={300}
              placeholder="Digite uma descrição (opcional)"
            />
          </div>
        </div>
        <div className={styles.footer}>
          <button type="button" className={styles.cancel} onClick={onCancel}>
            CANCELAR
          </button>
          <button type="submit" className={styles.save}>
            SALVAR
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ProductFormModal;
