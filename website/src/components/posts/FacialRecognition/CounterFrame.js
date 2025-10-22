import React from "react";
import { create } from "zustand";

const useCounterStore = create((set) => ({
  numbers: [3, 1, 2, 2, 3, 2, 4, 2, 3, 2, 1, 2, 2],
  step: 0,
  guesses: new Map([
    [
      1,
      {
        correct: 0,
        incorrect: 0,
      },
    ],
    [
      2,
      {
        correct: 0,
        incorrect: 0,
      },
    ],
    [
      3,
      {
        correct: 0,
        incorrect: 0,
      },
    ],
    [
      4,
      {
        correct: 0,
        incorrect: 0,
      },
    ],
  ]),
  increment: (guess) =>
    set((state) => {
      if (state.step === state.numbers.length - 1) {
        return state;
      }
      if (![1, 2, 3, 4].includes(guess)) {
        return state;
      }
      const correctVal = state.numbers[state.step];
      const updatedGuesses = new Map(state.guesses);
      let v = state.guesses.get(correctVal);
      if (guess === correctVal) {
        v.correct++;
      } else {
        v.incorrect++;
      }
      updatedGuesses.set(correctVal, v);
      return { step: state.step + 1, guesses: updatedGuesses };
    }),
}));

function CounterFrame() {
  const currentNumber = useCounterStore((state) => state.numbers[state.step]);
  const increment = useCounterStore((state) => state.increment);
  const guesses = useCounterStore((state) => state.guesses);

  const handleButtonClick = (counterIndex) => {
    increment(counterIndex);
  };

  return (
    <div>
      <h2>Current Number: {currentNumber}</h2>
      <div>
        {Array.from(guesses, ([val, { correct, incorrect }]) => (
          <button
            key={val}
            onClick={() => handleButtonClick(val)}
            style={{ marginRight: "10px", marginTop: "10px" }}
          >
            {val}
            correct: {correct}
            incorrect: {incorrect}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CounterFrame;
