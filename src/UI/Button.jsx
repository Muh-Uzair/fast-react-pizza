import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

const small_btn_styles = `rounded-full bg-yellow-500 px-[18px] py-[7px] text-[12px] font-bold uppercase transition-all duration-200 hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-0 active:bg-yellow-500 disabled:cursor-not-allowed`;
const base_styles = `mt-[20px] rounded-full bg-yellow-500 px-[18px] py-[10px] text-[18px] font-bold uppercase transition-all duration-200 hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-0 active:bg-yellow-500 disabled:cursor-not-allowed`;
const grayed_out = `mt-[20px] rounded-full border-[3px] text-stone-400 border-stone-400 px-[18px] py-[7px] text-[18px] font-bold uppercase transition-all duration-200 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-0 active:bg-yellow-500 disabled:cursor-not-allowed`;

export default function Button({ children, disabled, type, to, onClick }) {
  if (onClick) {
    return (
      <button
        disabled={disabled}
        className={
          type === "small"
            ? small_btn_styles
            : type === "grayed out"
              ? grayed_out
              : base_styles
        }
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  if (to) {
    return (
      <Link className={base_styles} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button
      disabled={disabled}
      className={
        type === "small"
          ? small_btn_styles
          : type === "grayed out"
            ? grayed_out
            : base_styles
      }
    >
      {children}
    </button>
  );
}
