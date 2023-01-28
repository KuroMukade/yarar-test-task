import React, { FC, useState } from 'react';

type Option = {
  label: string;
  value: number;
};

interface IDropdownProps {
  options: Option[];
  name: string;
  id: string;
  className: string;
}

const Dropdown: FC<IDropdownProps> = ({ options, name, id, className }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
  };

  return (
    <select className={className} name={name} id={id} onChange={(e) => handleChange(e)} value={selectedValue}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
