
 
import AppContainer from "./Layout/AppContainer";
import RoutesComponent from "./Routers";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <RoutesComponent />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
