import { useNavigate } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { calculateCartTotals, formatCurrency } from '@/utils';
import { useScrollToTop } from '@/utils';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Select.Option value="86">+86</Select.Option>
      <Select.Option value="87">+87</Select.Option>
      <Select.Option value="52">+52</Select.Option>
    </Select>
  </Form.Item>
);

export const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart()
  const { totalItemsCart, totalPrice } = calculateCartTotals(cart);

  const handleLogin = () => {
    clearCart()
    navigate('/home')
  }

  useScrollToTop()

  return (
    <section className="container max-w-7xl mx-auto my-11 px-3 h-screen">
      <h1 className="text-golden text-3xl font-bold text-center mb-3">
        Añade tu información
      </h1>
      <div className="flex flex-col items-center gap-1 my-4">
        <h2>Total de productos añaditos: {" "}
          <span className="font-bold text-golden">
            {totalItemsCart}
          </span>
        </h2>
        <h2>Total a padar: {" "}
          <span className="font-bold text-golden">
            {formatCurrency(totalPrice)}
          </span>
        </h2>
      </div>
      <Form onFinish={handleLogin} {...formItemLayout} variant="filled" style={{ maxWidth: '550px', margin: '0 auto' }}>
        <Form.Item
          name="email"
          label="Correo electrónico"
          rules={[
            {
              type: 'email',
              message: 'El correo electrónico no es válido.',
            },
            {
              required: true,
              message: 'Por favor, introduce tu correo electrónico.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="select"
          label="País/Región"
          hasFeedback
          rules={[{ required: true, message: 'Selecciona un país/región' }]}
        >
          <Select placeholder="Selecciona tu país">
            <Select.Option value="china">China</Select.Option>
            <Select.Option value="usa">U.S.A</Select.Option>
            <Select.Option value="mexico">México</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="name" label="Nombre" rules={[{ required: true, message: 'Agrega tu nombre' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Dirección">
          <Space.Compact style={{ width: "100%" }}>
            <Form.Item
              name={['address', 'street']}
              label="Dicección"
              noStyle
              rules={[{ required: true, message: 'Agrega una dirección' }]}
            >
              <Input />
            </Form.Item>
          </Space.Compact>
        </Form.Item>

        <Form.Item label="Número Int">
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="number"
          pattern="[0-9]"
          type="number"
          label="Teléfono"
          rules={[{ required: true, message: 'Agrega un número telefónico' }]}
          minLength={10}
        >
          <InputNumber addonBefore={prefixSelector} minLength={10} maxLength={10} style={{ width: '100%' }} />
        </Form.Item>


        <Button type="primary" htmlType="submit">
          Pagar
        </Button>
      </Form>
    </section>
  )
}