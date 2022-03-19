import styled from "styled-components";
import mainBackground from "../../assets/backgrounds/main_background.jpg";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;

  background: url(${mainBackground});
  background-size: cover;
`;
