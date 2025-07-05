import { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import styles from "./Login.module.scss";
import { login } from "../../api/authService";
import { notify } from "../../components/Notification/Notification";

const { Title } = Typography;

export default function Login() {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            const user = await login(values.username, values.password);
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                notify("success", "Login realizado", `Bem-vindo(a), ${user.username}!`);
                setTimeout(() => {
                    window.location.href = "/produtos";
                }, 1000);
            } else {
                notify("error", "Login inválido", "Usuário ou senha inválidos.");
            }
        } catch (e) {
            notify("error", "Login inválido", "Usuário ou senha inválidos.");
        }
        setLoading(false);
    };

    return (
        <div className={styles["login-root"]}>
            <div className={styles["login-left"]}>
                <img src="/logo.png" alt="Logo Quiosque Inteligente" className={styles.logo} />
                <Title level={3} className={styles["login-title"]}>
                    SOFT LIVE
                </Title>
            </div>
            <div className={styles["login-right"]}>
                <div className={styles["login-form-area"]}>
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
                            rules={[{ required: true, message: "Digite o usuário!" }]}
                        >
                            <Input size="large" placeholder="Digite o usuário" />
                        </Form.Item>
                        <Form.Item
                            label="Senha"
                            name="password"
                            rules={[{ required: true, message: "Digite a senha!" }]}
                        >
                            <Input.Password size="large" placeholder="Digite a senha" />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                size="large"
                                className={styles["login-btn"]}
                                loading={loading}
                            >
                                ENTRAR
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}
