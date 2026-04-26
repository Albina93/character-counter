import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";
import "./App.css";

function App() {
  return (
    <div>
      <CharacterCounter minWords={25} maxWords={100} />
    </div>
  );
}

export default App;
