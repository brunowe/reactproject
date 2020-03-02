import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import React from 'react';
import { Container, Form, SubmitButton } from './styles';

function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositorios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="adicionar repositorio" />

        <SubmitButton disable>
          <FaPlus color="FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Main;
