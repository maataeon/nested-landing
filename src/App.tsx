import Header from "./components/header/Header.tsx";
import './App.css'
import MainIdea from "./components/mainIdea/MainIdea.tsx";
import MainAction from "./components/mainAction/MainAction.tsx";
import GranuladoSVG from "./GranuladoSVG.tsx";

function App() {
  return (
    <div className="app-container">
      <GranuladoSVG />
      <Header />
      <MainIdea />
      <MainAction />
    </div>
  );
}

export default App;