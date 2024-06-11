'use client';

import React, { useState } from 'react';
import Select from 'react-select';

const MySelectComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value, { action }) => {
    if (action === 'input-change') {
      setInputValue(value);
    }
  };

  return (
    <Select
      onInputChange={handleInputChange}
      inputValue={inputValue}
      isSearchable={true}
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
      ]}
      menuIsOpen={false}
    />
  );
};

export default MySelectComponent;
