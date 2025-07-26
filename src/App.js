import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h2>hello, this is ololade</h2>
      <Counter></Counter>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        <span>step:{step}</span>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <span>count:{count}</span>
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
    </div>
  );
}

export default App;
