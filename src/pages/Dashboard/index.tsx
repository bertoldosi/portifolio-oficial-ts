import { Form } from '@unform/web';
import { FormHandles, Scope } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import Input from '../../components/input';
import * as Yup from 'yup';

import { Container, Header } from './styles';
import { Link } from 'react-router-dom';

interface Errors {
  [key: string]: string;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async data => {
    try {
      /*formRef.current?.setErrors({});*/

      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome obrigatório'),
        sobre: Yup.string().required('Sobre obrigatório'),
        profissao: Yup.string().required('Profissao obrigatório'),
        whatsapp: Yup.string().required('WhatsApp obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('E-mail inválido'),

        midias: Yup.object().shape({
          facebook: Yup.string().required('Facebook é obrigatório'),
          instagram: Yup.string().required('Instagram é obrigatório'),
          linkedin: Yup.string().required('Linkedin é obrigatório'),
          github: Yup.string().required('Github é obrigatório'),
        }),

        educacoes: Yup.object().shape({
          titulo: Yup.string().required('Titulo é obrigatório'),
          tipo: Yup.string().required('Tipo é obrigatório'),
          dt_inicial: Yup.string().required('Data inicial é obrigatório'),
          dt_final: Yup.string().required('Data final é obrigatório'),
        }),

        experiencias: Yup.object().shape({
          titulo: Yup.string().required('Titulo é obrigatório'),
          tipo: Yup.string().required('Tipo é obrigatório'),
          dt_inicial: Yup.string().required('Data inicial é obrigatório'),
          dt_final: Yup.string().required('Data final é obrigatório'),
        }),

        qualificacoes: Yup.object().shape({
          titulo: Yup.string().required('Titulo é obrigatório'),
          instituicao: Yup.string().required('Instituicao é obrigatório'),
          dt_exec: Yup.string().required('Data de excução é obrigatório'),
        }),

        skills: Yup.object().shape({
          titulo: Yup.string().required('Titulo é obrigatório'),
          nivel: Yup.string().required('Nivel é obrigatório'),
          tempo: Yup.string().required('Tempo é obrigatório'),
        }),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      console.log(data);
    } catch (err) {
      const validationErrors: Errors = {};
      if (err instanceof Yup.ValidationError) {
        console.table(err);
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current?.setErrors(validationErrors);
        return;
      }
    }
  }, []);

  return (
    <>
      <Header>
        <span>Dashboard</span>
        <Link to="/">Sair</Link>
      </Header>
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div className="owner">
            <label>owner</label>
            <Input name="nome" type="text" placeholder="Nome" />
            <Input name="sobre" type="text" placeholder="Sobre" />
            <Input name="profissao" type="text" placeholder="Profissão" />
            <Input name="whatsapp" type="text" placeholder="Whatsapp" />
            <Input name="email" type="text" placeholder="Email" />
          </div>

          <div className="midias">
            <label>midias</label>
            <Scope path="midias">
              <Input name="facebook" type="text" placeholder="Facebook" />
              <Input name="instagram" type="text" placeholder="Instagram" />
              <Input name="linkedin" type="text" placeholder="Linkedin" />
              <Input name="github" type="text" placeholder="Github" />
            </Scope>
          </div>

          <div className="educacoes">
            <label>educacoes</label>
            <Scope path="educacoes">
              <Input name="titulo" type="text" placeholder="Titulo" />
              <Input name="tipo" type="text" placeholder="Tipo" />
              <Input name="instituicao" type="text" placeholder="Instituicao" />
              <Input
                name="dt_inicial"
                type="text"
                placeholder="Data de inicio"
              />
              <Input name="dt_final" type="text" placeholder="Data de final" />
            </Scope>
          </div>

          <div className="experiencias">
            <label>experiencias</label>
            <Scope path="experiencias">
              <Input name="titulo" type="text" placeholder="Titulo" />
              <Input name="tipo" type="text" placeholder="Tipo" />
              <Input name="instituicao" type="text" placeholder="Instituicao" />
              <Input
                name="dt_inicial"
                type="text"
                placeholder="Data de inicio"
              />
              <Input name="dt_final" type="text" placeholder="Data de final" />
            </Scope>
          </div>

          <div className="qualificacoes">
            <label>qualificacoes</label>
            <Scope path="qualificacoes">
              <Input name="titulo" type="text" placeholder="Titulo" />
              <Input name="instituicao" type="text" placeholder="Instituicao" />
              <Input name="dt_exec" type="text" placeholder="Data" />
            </Scope>
          </div>

          <div className="skills">
            <label>skills</label>
            <Scope path="skills">
              <Input name="titulo" type="text" placeholder="Titulo" />
              <Input name="nivel" type="text" placeholder="Nivel" />
              <Input name="tempo" type="text" placeholder="Tempo" />
            </Scope>
          </div>

          <div className="btn">
            <button type="submit">Comfirmar</button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Dashboard;
