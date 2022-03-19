import mainWallpaper from "./assets/backgrounds/main_background.jpg";
import secondWallpaper from "./assets/backgrounds/second_background.jpg";

export const Settings = {
  general: {
    opacity: {
      main: "rgba(255, 255, 255, 0.6)",
    },
    blur: {
      hard: "blur(3rem)",
      medium: "blur(2rem)",
    },
  },
  desktop: {
    secondsToChangeWallpaper: 15,
    wallpapers: [mainWallpaper, secondWallpaper],
  },
};
