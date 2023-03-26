import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121212;
  padding: 0 12px;

  & .login {
    background-color: #eaeaec;
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & .login-area {
      background-color: #181c2e;
      width: 100%;
      display: flex;
      justify-content: center;
      & img {
        width: 170px;
        height: 130px;
        padding: 20px;
      }
    }

    & form {
      margin-top: 24px;
      width: 90%;
      display: flex;
      flex-direction: column;

      & h1 {
        text-align: center;
        margin-bottom: 16px;
        color: #181c2e;
      }

      & input {
        margin-bottom: 16px;
        padding: 10px 10px;
        border-radius: 4px;
        border: none;
        font-size: 15px;
        background-color: #fff;
        outline: none;
      }

      & button {
        padding: 10px;
        border: none;
        border-radius: 4px;
        background-color: #181c2e;
        color: #fff;
        font: 18px;
      }
    }

    & a {
      margin: 24px 0;
      color: #121212;
    }
  }
`;
