import "./Movement.scss"
// Icons
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { GoArrowUpLeft } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownLeft } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";
import { IoIosPlay } from "react-icons/io";

const Movement = ({ move }) => {
  return (
    <div id="movement">
      <div>
        <button className="top-left" onClick={() => move("UL")}><GoArrowUpLeft/></button>
        <button onClick={() => move("U")}><GoArrowUp/></button>
        <button className="top-right" onClick={() => move("UR")}><GoArrowUpRight/></button>
      </div>

      <div>
        <button onClick={() => move("L")}><GoArrowLeft/></button>
        <button onClick={() => move()}><IoIosPlay/></button>
        <button onClick={() => move("R")}><GoArrowRight/></button>
      </div>

      <div>
        <button className="bottom-left" onClick={() => move("DL")}><GoArrowDownLeft/></button>
        <button onClick={() => move("D")}><GoArrowDown/></button>
        <button className="bottom-right" onClick={() => move("DR")}><GoArrowDownRight/></button>
      </div>
    </div>
  );
};

export default Movement;