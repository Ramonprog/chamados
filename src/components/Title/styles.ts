import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  box-shadow: 1px 1px 6px #121212;

  & .info {
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin: 0.8rem;

    & .icon {
      animation: bounce 1s infinite;
    }

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }

    & span {
      margin-left: 7px;
      font-size: 1.5em;
      font-weight: bold;
    }
  }
`;
