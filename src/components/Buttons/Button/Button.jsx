import { Btn } from './Button.styled';

export const Button = ({
  onClickHandler,
  btnText,
  type,
  disabled,
  autofocus,
}) => {
  return (
    <Btn
      onClick={onClickHandler}
      type={type}
      disabled={disabled}
      autoFocus={autofocus}
    >
      {btnText}
    </Btn>
  );
};
