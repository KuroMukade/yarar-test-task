import React, { FC } from 'react';

interface IInput {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  type: string;
  placeholder: string;
}

const Input: FC<IInput> = ({ value, onChange, placeholder, type }) => {
  return (
    <input placeholder={placeholder} type={type} value={value} onChange={(e) => onChange(e)} />
  );
};

export default Input;
