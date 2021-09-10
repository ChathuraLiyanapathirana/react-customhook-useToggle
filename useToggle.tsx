import React, { useState } from 'react';

const useToggle = (
  value: boolean
): {
  toggledValue: boolean;
  toggleValue: Function;
} => {
  const [toggledValue, setToggledValue] = useState(value);

  const toggleValue = (value?: boolean) => {
    setToggledValue(currentValue => {
      return typeof value !== 'undefined' ? value : !currentValue;
    });
  };

  return { toggledValue, toggleValue };
};

export default useToggle;
