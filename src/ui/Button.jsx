import { Link } from 'react-router-dom';

export default function Button({
  children,
  disabled,
  to,
  type,
  onClick,
  buttonType = 'button',
}) {
  const base =
    'upercase text-sm inline-block rounded-full bg-yellow-400 font-semibold text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed ';

  const style = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs ',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm ',
    secondary:
      'px-4 py-2.5 text-sm md:px-6 md:py-4 uppercase inline-block rounded-full border-2 border-stone-300 font-semibold focus:text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:ring focus:ring-stone-200 focus:outline-none disabled:cursor-not-allowed ',
  };

  if (to) {
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={buttonType}
      onClick={onClick}
      disabled={disabled}
      className={style[type]}
    >
      {children}
    </button>
  );
}
