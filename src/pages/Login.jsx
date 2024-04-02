import { Layout, Flex, Alert, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { LoginForm } from '@/components/LoginForm';
import { RickLogo } from '@/components/Icons/RickLogo';
import { login, error, loading } from '@/redux/authSlice'

const LAYOUTSTYLE = {
  margin: '0 auto',
  minHeight: '100vh',
  maxWidth: '500px',
  width: '100%',
  padding: '20px',
  position: 'relative',
};

const ALERTSTYLE = {
  position: 'absolute',
  top: '20px',
  width: '90%',
};

export const Login = () => {
  const errorLogin = useSelector(state => state.error)
  const loadingLogin = useSelector(state => state.loading)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginFake = (values) => {
    dispatch(error(null));
    const { email, password } = values;
    
    if (email !== 'test@test.com' && password !== 'pasword123') {
      dispatch(loading(true));
      setTimeout(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NThmNTAzOGE0N2ZhZTEyNTc5NjBkOWMiLCJpYXQiOjE3MTIwODEwMzgsImV4cCI6MTcxMzg4MTAzOCwidHlwZSI6ImFjY2VzcyJ9.FxJTR1QY9xbtSF8q-BOxv5QiEuGtau3m6FKMkgebvx0";
        const user = {
          email: 'test@test.com',
          name: 'Test User',
        };
        dispatch(login({ token, user }));
        dispatch(loading(false));
        navigate('/home');
      }, 3000);
    } else {
      setTimeout(() => {
        dispatch(error(true));
      }, 3000);
    }
  };

  return (
    <Layout>
      <Flex
        gap="middle"
        vertical
        justify='center'
        align='center'
        style={LAYOUTSTYLE}
      >
        <div style={{ width: '100%' }}>
          <h1 className="text-center font-extrabold text-3xl text-golden">
            Rick and Morty
          </h1>
          <Link
            to="https://rickandmortyapi.com/documentation"
            target="_blank"
            title="Rick and Morty API"
          >
            <RickLogo className="w-32 m-auto mb-4" />
          </Link>
          <LoginForm handleLogin={handleLoginFake} loadingLogin={loadingLogin} />
          {errorLogin && (
            <Space direction="vertical" style={ALERTSTYLE}>
              <Alert
                description="Correo o contraseña incorrectos. Por favor, inténtalo de nuevo."
                type="error"
                closable
                onClose={() => dispatch(error(null))}
              />
            </Space>
          )}
        </div>
      </Flex>
    </Layout>
  );
};
