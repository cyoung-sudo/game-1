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

const Movement = () => {
  return (
    <div id="movement">
      <div>
        <button><GoArrowUpLeft/></button>
        <button><GoArrowUp/></button>
        <button><GoArrowUpRight/></button>
      </div>

      <div>
        <button><GoArrowLeft/></button>
        <button><IoIosPlay/></button>
        <button><GoArrowRight/></button>
      </div>

      <div>
        <button><GoArrowDownLeft/></button>
        <button><GoArrowDown/></button>
        <button><GoArrowDownRight/></button>
      </div>
    </div>
  );
};

export default Movement;