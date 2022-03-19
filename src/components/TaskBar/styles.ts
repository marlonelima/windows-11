import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  background: rgba(255, 255, 255, 0.7);
  position: fixed;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(15px);

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Apps = styled.ul`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin: 0 auto;

  li {
    padding: 0.1rem 0.4rem;
    border-radius: 0.5rem;
    transition: 0.2s;
  }

  li:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: scale(1.2);
  }

  li:not(:last-child) {
    margin-right: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 1.6rem;
  }
`;
