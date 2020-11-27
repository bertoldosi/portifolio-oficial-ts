import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
     *{
         margin: 0;
         padding: 0;
         outline: none;
         text-decoration: none;
         box-sizing: border-box;
         font-size: 100%;
     }

     body{
        background:#f0f0f5;
        -webkit-font-smoothing: antialiased;
         font-family: Roboto, sans-serif;
         color: #313030;
     }

     a{
      color: #313030;
     }

     input{
      cursor: pointer;
     }

    h1{
      font-weight: 500;
      margin-top: 1rem;
      padding-bottom: .5rem;
    }

    h2{
      font-weight: 400;
    }

    p{
      margin-top: 2rem;
      font-weight: 300;
      text-align: justify;
      line-height: 1.4rem;

    }

    @media (max-width: 420px) {

      p{
        font-size: 90%;
        line-height: 1.2rem;
      }

    }


`;
