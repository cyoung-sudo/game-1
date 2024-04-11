import "./Display.scss"

const Display = ({ moves }) => {
  return (
    <div id="display">
      <div>Moves: { moves }</div>
    </div>
  );
};

export default Display;