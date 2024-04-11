import "./Actions.scss"

const Actions = ({ newGame }) => {
  return (
    <div id="actions">
      <button onClick={ newGame }>New Game</button>
    </div>
  );
};

export default Actions;