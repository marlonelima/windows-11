import { Container, Icon } from "./styles";

import BatteryIcon from "../../../assets/icons/battery.png";
import SoundIcon from "../../../assets/icons/sound.png";

export const Options = () => (
  <Container>
    <Icon src={BatteryIcon} alt="Battery Level" />
    <Icon src={SoundIcon} alt="Sound" />
  </Container>
);
