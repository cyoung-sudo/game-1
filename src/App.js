import './App.scss';
// Components
import Display from "./components/display/Display";
import Board from "./components/board/Board";
import Movement from "./components/controls/Movement";
import Actions from "./components/controls/Actions";

function App() {
  return (
    <div id="app">
      <div id="display-wrap">
        <Display/>
      </div>

      <div id="board-wrap">
        <Board/>
      </div>

      <div id="controls-wrap">
        <div id="movement-wrap">
          <Movement/>
        </div>

        <div id="actions-wrap">
          <Actions/>
        </div>
      </div>
    </div>
  );
}

export default App;
