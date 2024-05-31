import { Form, Input, Button, Typography, Checkbox } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { Loading } from '@/components/Loading';

export const LoginForm = ({ handleLogin, loadingLogin }) => {
  const { Text } = Typography;

  const BUTTONSTYLE = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    minWidth: '180px',
    height: '50px',
    backgroundColor: loadingLogin ? 'black' : '',
  }

  return (
    <Form
      name="login-form"
      initialValues={{ remember: true }}
      onFinish={handleLogin}
    >
      <Form.Item
        name="email"
        rules={[
          { required: true, message: 'Por favor ingresa tu dirección de correo electrónico' },
          { type: 'email', message: 'Ingresa una dirección de correo electrónico válida' },
        ]}
      >
        <Input placeholder="Correo electrónico" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Contraseña"
        />
      </Form.Item>

      <div style={{ textAlign: 'center', fontWeight: '600' }}>
        Utiliza cualquier{" "}
        <Text strong underline style={{ color: '#fbbf24' }}>
          correo
        </Text>{" "}
        y{" "}
        <Text strong underline style={{ color: '#fbbf24' }}>
          contreseña
        </Text>{" "}
        para iniciar sesión.
      </div>

      <Form.Item style={{ marginTop: '1rem', textAlign: 'center' }}>
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          style={BUTTONSTYLE}
          disabled={loadingLogin}
        >
          {loadingLogin ? <Loading /> : 'Iniciar sesión'}
        </Button>
      </Form.Item>
    </Form>
  )
}
