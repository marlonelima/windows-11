import { useSelector } from "react-redux";
import { RootState } from "../../stores";

import { Container } from "./styles";

export const StartMenu = () => {
  const isStartMenuActive = useSelector(
    (state: RootState) => state.main.startMenu
  );

  return <Container active={isStartMenuActive}></Container>;
};
