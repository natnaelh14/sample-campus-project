import { classNames } from "../lib/helpers";

const Button = ({ onClick, styleType, children, ...props }) => {
  return (
    <button
      className={classNames(
        styleType === "round" && "btn-round",
        styleType === "square" && "btn-square",
        "btn"
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
