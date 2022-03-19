import { getTodayDate } from "../../../utils/moment";
import { Container, Date, Hours } from "./styles";

export const Clock = () => (
  <Container>
    <Date>{getTodayDate()}</Date>
    <Hours>11:11 AM</Hours>
  </Container>
);
