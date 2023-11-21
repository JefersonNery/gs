import React from 'react';
import styled from 'styled-components';
import {Colors} from '../../shared/DesignTokens';

const Button = styled.button`
    background-color: ${Colors.RED_800};
    color: ${Colors.NEUTRAL_WHITE};
    width: 40%;
    height: 100%;
    font-size: 1.2em;
    margin: 3vh auto;
    text-align: center;
    padding: 15px;
    &:hover{
        cursor:pointer;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

function MeuBotao() {
  const handleClick = () => {
    alert(`
        EMERGÊNCIA ACIONADA COM SUCESSO ! ! !
        UMA UNIDADE ESTA A CAMINHO ! ! !
    `);
  };

  return (
    <Container>
      <Button onClick={handleClick}>
        ACIONAR EMERGÊNCIA
      </Button>
    </Container>
  );
}

export default MeuBotao;
