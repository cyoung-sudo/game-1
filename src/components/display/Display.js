import "./Display.scss"

const Display = ({ turn }) => {
  return (
    <div id="display">
      <div>Turn: { turn }</div>
    </div>
  );
};

export default Display;