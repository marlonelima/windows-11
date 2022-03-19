import styled from "styled-components";

import { Settings } from "./../../../settings";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.7rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: 0.2s;

  &:hover {
    background: ${Settings.general.opacity.main};
    transition: 0.2s;
  }
`;

export const Icon = styled.img`
  width: 1.2rem;
`;
