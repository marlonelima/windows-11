import styled from "styled-components";

import { Settings } from "../../settings";

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  background: ${Settings.general.opacity.main};
  position: fixed;
  bottom: 0;
  left: 0;
  backdrop-filter: ${Settings.general.blur.hard};

  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1000;
`;

export const Apps = styled.ul`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin: 0 auto;

  button {
    border: none;
    background: none;
    padding: 0.3rem 0.4rem;
    border-radius: 0.5rem;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    background: ${Settings.general.opacity.main};
    transform: scale(1.15);
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
