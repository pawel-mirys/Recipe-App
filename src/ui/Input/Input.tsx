import clsx from 'clsx';
import styles from './Input.module.scss';

type InputProps = {
  htmlFor: string;
  className?: string;
  type: 'text' | 'search' | 'checkbox';
  placeHolder: string;
  innerRef?: React.RefObject<HTMLInputElement>;
  onChange: Function;
};

export const Input = ({ htmlFor, className, type, placeHolder, innerRef, onChange }: InputProps) => {
  return (
    <label htmlFor={htmlFor}>
      {htmlFor}
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e);
        }}
        className={clsx(className, styles.nameInput, styles.input)}
        type={type}
        placeholder={placeHolder}
        name={htmlFor}
        ref={innerRef}
      />
    </label>
  );
};
