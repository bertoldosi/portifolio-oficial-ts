import styled from 'styled-components'

export const Copyright = styled.footer`
  width: 100%;
  height: 90px;
  background-color: #1A252F;

  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: .3rem solid #1abc9c;

  h5{
    color: white;
    font-weight: 300;
  }


  @media (max-width: 420px) {
    h5{
      font-size: .8rem;
    }
  }

`
