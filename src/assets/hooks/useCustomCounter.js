import { useState } from 'react';

const useCustomCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increaseCounter = () => {
    setCounter(prevCounter => (prevCounter < 999 ? prevCounter + 1 : prevCounter));
  };

  const decreaseCounter = () => {
    setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : prevCounter));
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 999) {
      setCounter(value);
    }
  };

  return {
    counter,
    increaseCounter,
    decreaseCounter,
    handleInputChange,
  };
};

export default useCustomCounter;
