import React, { useCallback, useRef } from 'react';
import { LoginCss } from './styles';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../../components/input';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import api from '../../services/api-adonis';

interface Errors {
  [key: string]: string;
}

interface authUser {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToasts();

  const Logando = async (email: string, password: string) => {
    try {
      const response = await api.post('sessions/', {
        email,
        password,
      });

      if (response.status == 200) {
        const { token } = response.data;

        localStorage.setItem('@Portifolio:token', token);
        localStorage.setItem('@Portifolio:token', token);

        addToast('Login realizado com sucesso! Você será redirecionado.', {
          appearance: 'success',
          autoDismiss: true,
        });

        setTimeout(() => {
          window.location.pathname = '/dashboard';
        }, 3000);
      }
    } catch {
      addToast('Ocorreu um erro ao fazer o login, cheque as credenciais.', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  const handleSubmit = useCallback(
    async (data: authUser) => {
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

        Logando(data.email, data.password);
      } catch (err) {
        const validationErrors: Errors = {};
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });
          formRef.current?.setErrors(validationErrors);
          return;
        }
      }
    },
    [Login, history],
  );

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
