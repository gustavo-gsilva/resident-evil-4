import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { SlideBarProvider } from "./context/SlideBarContext";

function App() {
  return (
    <SlideBarProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </SlideBarProvider>
  );
};

export default App;