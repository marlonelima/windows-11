import { useCallback, useEffect, useState } from "react";
import { Settings } from "../../settings";
import { Container } from "./styles";

const { wallpapers, secondsToChangeWallpaper } = Settings.desktop;

export const DesktopScreen = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  const changeWallpaper = useCallback(() => {
    if (currentBackground + 1 >= wallpapers.length)
      return setCurrentBackground(0);

    return setCurrentBackground(currentBackground + 1);
  }, [currentBackground]);

  useEffect(() => {
    setTimeout(changeWallpaper, secondsToChangeWallpaper * 1000);
  }, [currentBackground, changeWallpaper]);

  return (
    <Container backgroundImage={wallpapers[currentBackground]}></Container>
  );
};
