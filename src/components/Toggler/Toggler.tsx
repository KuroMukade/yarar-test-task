import React, { FC, useState } from 'react';

interface IToggler {
  name?: string;
  className?: string;
  setActiveState?: (active: boolean) => void;
}

const Toggler: FC<IToggler> = ({ name, className, setActiveState }) => {
  const [isActive, setActive] = useState(false);

  const handleChange = (state: boolean) => {
    if (setActiveState) {
      setActiveState(state);
    }
    setActive(state);
  };

  return (
      <input
        className={`btn-toggler ${className}`}
        onChange={() => handleChange(!isActive)}
        checked={isActive}
        type="checkbox"
        name={name || 'checkbox'}
      />
  );
};

export default Toggler;
