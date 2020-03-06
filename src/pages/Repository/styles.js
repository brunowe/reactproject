import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    color: #7159c1;
    font-size: 16px;
  }
  img {
    width: 140px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    font-size: 14px;
    color: #666;
    margin-top: 5px;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;
