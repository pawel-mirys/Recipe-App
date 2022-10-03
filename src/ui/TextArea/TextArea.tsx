import clsx from 'clsx';
import React from 'react';
import styles from './TextArea.module.scss';

type InputProps = {
  htmlFor: string;
  className?: string;
  cols?: number;
  rows?: number;
  placeHolder: string;
  innerRef?: React.RefObject<HTMLTextAreaElement>;
  onChange: Function;
};

export const TextArea = ({ htmlFor, className, placeHolder, innerRef, cols = 30, rows = 10, onChange }: InputProps) => {
  return (
    <label htmlFor={htmlFor}>
      {htmlFor}
      <textarea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          onChange(e);
        }}
        name={htmlFor}
        className={clsx(className, styles.inputInvalid, styles.TextArea)}
        cols={cols}
        rows={rows}
        placeholder={placeHolder}
        ref={innerRef}
      />
    </label>
  );
};
