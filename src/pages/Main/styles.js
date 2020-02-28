import styled from 'styled-components';

export const Container = styled.h1`
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 30px;
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }
`;
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  input {
    flex: 1;
    border: 1px solid;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;
export const SubmitButton = styled.button``;
