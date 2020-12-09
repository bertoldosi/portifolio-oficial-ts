import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 720px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`