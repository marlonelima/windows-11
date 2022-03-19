import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.7rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.75);
    transition: 0.2s;
  }
`;

export const Icon = styled.img`
  width: 1.2rem;
`;
