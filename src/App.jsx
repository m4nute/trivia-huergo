import { Route, Routes } from "react-router-dom";
import "./styles/global.scss";
import Home from "./components/Home";
import TriviaHuergo from "./components/TriviaHuergo";
import TriviaInformatica from  './components/TriviaInformatica'
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="trivia/huergo" exact element={<TriviaHuergo />} />
        <Route path="trivia/informatica" exact element={<TriviaInformatica />} />
      </Routes>
    </div>
  );
}

export default App;
