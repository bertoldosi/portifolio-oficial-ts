import styled, { css } from 'styled-components';

interface PropsError {
  isError: boolean;
}

export const Container = styled.div<PropsError>`
  input {
    width: 100%;
    height: 2rem;
    color: #313030;
    border: none;
    cursor: text;
    border-bottom: 0.1rem solid #2c3e50;

    ${props =>
      props.isError &&
      css`
        border-bottom: 0.1rem solid red;
      `}
  }
`;
