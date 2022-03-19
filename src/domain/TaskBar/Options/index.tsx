import { Container, Icon } from "./styles";

import BatteryIcon from "../../../assets/icons/battery.png";
import SoundIcon from "../../../assets/icons/sound.png";
import WifiIcon from "../../../assets/icons/wifi.png";

export const Options = () => (
  <Container>
    <Icon src={WifiIcon} alt="Wifi" />
    <Icon src={SoundIcon} alt="Sound" />
    <Icon src={BatteryIcon} alt="Battery Level" />
  </Container>
);
