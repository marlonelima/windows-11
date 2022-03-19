import { StartMenu } from "./components/StartMenu";
import { TaskBar } from "./components/TaskBar";
import { DesktopScreen } from "./screens/Desktop";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <DesktopScreen />
      <TaskBar />
      <StartMenu />
      <GlobalStyles />
    </>
  );
}

export default App;
