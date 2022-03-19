import { StartMenu } from "./domain/StartMenu";
import { TaskBar } from "./components/TaskBar";
import { DesktopScreen } from "./screens/Desktop";
import { GlobalStyles } from "./styles/GlobalStyles";

import { Provider } from "react-redux";
import { store } from "./stores";

function App() {
  return (
    <Provider store={store}>
      <DesktopScreen />
      <TaskBar />
      <StartMenu />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
