import { Apps, Container } from "./styles";

import StartIcon from "../../assets/icons/start.png";
import MultiDesktop from "../../assets/icons/multidesktop.png";
import NoteIcon from "../../assets/icons/note.png";
import EdgeIcon from "../../assets/icons/edge.png";
import StoreIcon from "../../assets/icons/store.png";

import { Clock } from "./Clock/index";
import { Options } from "./Options";

export const TaskBar = () => (
  <Container>
    <Apps>
      <li>
        <img src={StartIcon} alt="Start Menu" />
      </li>
      <li>
        <img src={MultiDesktop} alt="Start Menu" />
      </li>
      <li>
        <img src={NoteIcon} alt="Start Menu" />
      </li>
      <li>
        <img src={EdgeIcon} alt="Start Menu" />
      </li>
      <li>
        <img src={StoreIcon} alt="Start Menu" />
      </li>
    </Apps>
    <Options />
    <Clock />
  </Container>
);
