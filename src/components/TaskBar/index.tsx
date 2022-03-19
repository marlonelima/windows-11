import { Apps, Container } from "./styles";

import StartIcon from "../../assets/icons/start.png";
import MultiDesktop from "../../assets/icons/multidesktop.png";
import NoteIcon from "../../assets/icons/note.png";
import EdgeIcon from "../../assets/icons/edge.png";
import StoreIcon from "../../assets/icons/store.png";

import { Clock } from "./Clock/index";
import { Options } from "./Options";

import { useDispatch } from "react-redux";
import { toggleStartMenu } from "../../stores/reducers/main.slice";

export const TaskBar = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Apps>
        <li>
          <button onClick={() => dispatch(toggleStartMenu())}>
            <img src={StartIcon} alt="Start Menu" />
          </button>
        </li>
        <li>
          <button onClick={() => dispatch(toggleStartMenu())}>
            <img src={MultiDesktop} alt="Start Menu" />
          </button>
        </li>
        <li>
          <button onClick={() => dispatch(toggleStartMenu())}>
            <img src={NoteIcon} alt="Start Menu" />
          </button>
        </li>
        <li>
          <button onClick={() => dispatch(toggleStartMenu())}>
            <img src={EdgeIcon} alt="Start Menu" />
          </button>
        </li>
        <li>
          <button onClick={() => dispatch(toggleStartMenu())}>
            <img src={StoreIcon} alt="Start Menu" />
          </button>
        </li>
      </Apps>
      <Options />
      <Clock />
    </Container>
  );
};
