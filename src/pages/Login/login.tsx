import React from 'react';
import { LoginCss } from './styles';
import { Form } from '@unform/web';
import Input from '../../components/input';

const Login: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <LoginCss>
      <div className="login">
        <header>
          <h1>ACESSO</h1>
        </header>
        <Form onSubmit={handleSubmit}>
          <div className="inputs">
            <label>LOGIN</label>
            <Input name="email" type="text" placeholder="Digite seu usuário" />

            <label>SENHA</label>
            <Input
              name="password"
              type="password"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="btn">
            <button type={'submit'}>LOGAR</button>
          </div>
        </Form>
      </div>
    </LoginCss>
  );
};

export default Login;
