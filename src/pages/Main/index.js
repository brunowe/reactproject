import {FaGithubAlt, FaPlus} from "react-icons/fa";
import React from 'react';
import { Container, Form, SubmitButton } from './styles';

function Main() {
  return (
    <Container>

      <h1><FaGithubAlt />Repositorios</h1>
    </Container>
    <Form onSubmit={()=> {}}>
      <input type="text" placeholder="adicionar repositorio" />
    </Form>
    <SubmitButton disable>
      <FaPlus color="FFF" size={14}/>
    </SubmitButton>
  );
}

export default Main;
