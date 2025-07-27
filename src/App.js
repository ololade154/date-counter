import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(event) => setStep(Number(event.target.value))}
        ></input>

        <span>step:{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(event) => setCount(Number(event.target.value))}
        ></input>
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <span>
        {count === 0
          ? 'Today is '
          : count > 0
          ? `${count} days from today is`
          : `${Math.abs(count)}  days ago was`}
      </span>
      <span> {date.toDateString()}</span>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
