import { useSelector } from "react-redux";
import { RootState } from "../../stores";

import { Container } from "./styles";

export const StartMenu = () => {
  const state = useSelector((state: RootState) => state.main);

  return <Container active={state.startMenu}></Container>;
};
