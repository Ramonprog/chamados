import styled from 'styled-components';

export const Container = styled.header`
  background-color: #181c2e;
  position: fixed;
  height: 100%;
  overflow: auto;
  width: 200px;

  & .container-avatar {
    background-color: #181c2e;
    height: 150px;
    padding-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      object-fit: cover;
      filter: drop-shadow(3px 4px 6px #121212);
      -webkit-filter: drop-shadow(3px 4px 6px #121212);
    }
  }

  & a {
    display: block;
    padding: 16px;
    display: flex;
    color: #fafafa;
    align-items: center;
    transition: ease-in-out 0.4s;
    &:hover {
      background-color: #121212;
      color: #fafafa;
    }

    & svg {
      margin-right: 8px;
    }
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
    margin: 0 auto;
    box-shadow: 2px 2px 6px #121212;
    text-align: center;
    & .container-avatar {
      display: none;
      & img {
        display: none;
      }
    }

    & a {
      display: inline-block;
      & svg {
        display: none;
      }
    }
  }
`;
