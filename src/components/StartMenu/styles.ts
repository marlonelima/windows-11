import styled from "styled-components";
import { Settings } from "../../settings";

interface IContainer {
  active: boolean;
}

export const Container = styled.div<IContainer>`
  width: 36rem;
  height: 40rem;
  background: ${Settings.general.opacity.main};
  backdrop-filter: ${Settings.general.blur.medium};

  position: absolute;

  transition: 0.5s;
  left: 50%;
  bottom: ${({ active }) => (active ? "4rem" : "-100%")};
  transform: translateX(-50%);
  border-radius: 0.5rem;
`;
