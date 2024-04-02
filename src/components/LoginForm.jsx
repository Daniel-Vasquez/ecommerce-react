import { Form, Input, Button, Checkbox } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { Loading } from '@/components/Loading';

export const LoginForm = ({ handleLogin, loadingLogin }) => {
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

      <Form.Item style={{ marginTop: '1rem', textAlign: 'center'}}>
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
