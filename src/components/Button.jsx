export default function Button({ txt, tp = "", leftIcon, rightIcon, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`font-16 fw-600 flex items-center button ${tp}`}
    >
      {leftIcon && <img className="button-left-icon" src={leftIcon} />}
      <span>{txt}</span>
      {rightIcon && <img className="button-right-icon" src={rightIcon} />}
    </div>
  );
}
