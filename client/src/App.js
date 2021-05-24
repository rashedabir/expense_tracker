import "./App.css";
import MainScreen from "./screens/MainScreen";
import { DataProvider } from "./GlobalState";

function App() {
  return (
    <DataProvider>
      <div>
        <MainScreen />
      </div>
      <footer>
        Developed by{" "}
        <a href="https://rashed-abir.web.app/" target="_blank" rel="noreferrer">
          Rashed Abir
        </a>
      </footer>
    </DataProvider>
  );
}

export default App;
