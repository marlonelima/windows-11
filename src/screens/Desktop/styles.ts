import styled from "styled-components";

interface IContainer {
  backgroundImage: number;
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex: 1;
  height: 100vh;

  background: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  transition: 1s;
`;
