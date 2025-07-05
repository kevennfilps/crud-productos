import React from "react";
import { Form, Input, Button, Typography } from "antd";
import styles from "./Login.module.scss";

const { Title } = Typography;

export default function Login() {
  const onFinish = (values: any) => {
    console.log("Login: ", values);
  };

  return (
    <div className={styles["login-root"]}>
      <div className={styles["login-left"]}>
        <div className={styles["logo"]}>
          <img src="/logoVenda.svg" alt="Logo Quiosque Inteligente" width={180} />
        </div>
        <Title level={4} className={styles["login-title"]}>
          SOFT LIVE
        </Title>
      </div>
      <div className={styles["login-right"]}>
        <Title level={4} className={styles["login-welcome"]}>
          Bem-vindo(a),
        </Title>
        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          className={styles["login-form"]}
        >
          <Form.Item
            label="Usuário"
            name="username"
            initialValue="raimundo.nonato@hotmail.com.br"
            rules={[{ required: true, message: "Digite o usuário!" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: "Digite a senha!" }]}
          >
            <Input.Password size="large" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              style={{ background: "#ff6500", borderColor: "#ff6500" }}
            >
              ENTRAR
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
