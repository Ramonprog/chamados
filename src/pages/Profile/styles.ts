import styled from 'styled-components';

export const Container = styled.div`
  & .container-profile {
    width: 100%;
    max-width: 700px;
    display: flex;
    background-color: #f8f8f8;
    border-radius: 5px;
    padding: 0.8rem;
    margin: 1rem 0;

    & .form-profile {
      position: relative;

      & .label-avatar {
        width: 250px;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;

        & input {
          display: block;
          position: fixed;
          z-index: 999;
          left: 130px;
        }

        & img {
          margin-bottom: 10px;
          border-radius: 50%;
          object-fit: cover;
          margin-left: 400px;
        }

        & span {
          position: absolute;
          z-index: 99;
          top: 36%;
          left: 310px;
          border-radius: 50%;
          opacity: 0.7;
          transition: all 0.5s;

          &:hover {
            opacity: 1;
            transform: scale(1.4);
          }
        }
      }
      & .inputs {
        width: 100%;
        & .field {
          & input {
            margin-bottom: 10px;
            padding: 10px;
            border: none;
            border-radius: 5px;
            width: 100%;
            max-width: 600px;
            outline: none;
            margin-top: 10px;
            box-shadow: 0 3px 3px 0 rgba(36, 36, 59, 0.15);
          }
        }
      }
      & button {
        width: 100%;
        border: none;
        padding: 8px;
        color: #fff;
        background-color: #181c2e;
        box-shadow: 0 3px 3px 0 rgba(36, 36, 59, 0.15);
      }
    }
  }
`;
