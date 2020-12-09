import React, { FormEvent, useState } from 'react'
import api from '../../../services/gmail'
import { BanFooter, MsgSuccess, MsgError, Loading } from './styles'


const Baner = function () {

  const [nome, setNome] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [mensagem, setMensagem] = useState<string>('')
  const [msgGmail, setmsgGmail] = useState<string>('')


  function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setmsgGmail('espera')

    api.post("/send", {
      params: {
        nome: nome,
        email: email,
        mensagem: mensagem
      }
    }).then(response => {
      setmsgGmail('enviado')

      setNome('')
      setEmail('')
      setMensagem('')
    })
      .catch(response => {
        setmsgGmail('error')
      })
  }

  return (
    <BanFooter>
      <h1>Contate-me</h1>
      <form onSubmit={send}>
        <div className='inputs'>
          <input
            type="text"
            required
            placeholder='Seu nome'
            value={nome}
            onChange={e => setNome(e.target.value)}
          />

          <input
            type="email"
            required
            placeholder='Seu email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <textarea
            placeholder='Sua mensagem'
            required
            value={mensagem}
            onChange={e => setMensagem(e.target.value)}
          />

        </div>
        {msgGmail == 'espera' && (<Loading><div className='c-loader'></div></Loading>)}
        {msgGmail == 'enviado' && (<MsgSuccess><h3>ENVIADO COM SUCESSO!</h3></MsgSuccess>)}
        {msgGmail == 'error' && (<MsgError><h3>ERRO AO ENVIAR!</h3></MsgError>)}

        <div className='btn'>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </BanFooter>
  )
}

export default Baner;
