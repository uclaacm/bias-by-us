import React, { useState } from 'react';

function CounterFrame() {
  const numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [processedLast, setProcessedLast] = useState(false);


  const handleButtonClick = (counterIndex) => {
    //Checks to make sure we haven't iterated through the last element yet
    if(!processedLast) {
      // Makes a copy of the current counters array
      const updatedCounters = [...counters];
      updatedCounters[counterIndex] = updatedCounters[counterIndex] + 1;
      setCounters(updatedCounters);

      if (currentIndex < numbers.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
      else {
        setProcessedLast(true);
      }
    }
  };

  return (
    <div>
      <h2>Current Number: {numbers[currentIndex]}</h2>
      <div>
        {counters.map((count, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            style={{ marginRight: '10px', marginTop: '10px' }}
          >
            Counter {index + 1}: {count}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CounterFrame;