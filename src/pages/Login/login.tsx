import React, { useCallback, useRef } from 'react';
import { LoginCss } from './styles';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../../components/input';
import * as Yup from 'yup';

interface Errors {
  [key: string]: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async data => {
    try {
      // Remove all previous errors
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('E-mail inválido')
          .required('E-mail é obrigatório'),
        password: Yup.string().required('Senha é obrigatório'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      console.log(data);
    } catch (err) {
      const validationErrors: Errors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current?.setErrors(validationErrors);
      }
    }
  }, []);

  return (
    <LoginCss>
      <div className="login">
        <header>
          <h1>ACESSO</h1>
        </header>
        <Form ref={formRef} onSubmit={handleSubmit}>
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
            <button type="submit">LOGAR</button>
          </div>
        </Form>
      </div>
    </LoginCss>
  );
};

export default Login;
