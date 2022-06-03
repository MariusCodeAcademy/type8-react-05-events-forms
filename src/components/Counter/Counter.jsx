import { useState } from 'react';

function Counter() {
  // let counterValue = 0
  const [counterValue, setCounterValue] = useState(0);

  // parasyti funkcija handleCounterIncrement() kuri didina counterValue 1

  return (
    <div className='counter'>
      <h3>Counter</h3>
      <h2>{counterValue}</h2>
      <div className='control'>
        <button className='btn'>plus</button>
      </div>
    </div>
  );
}

export default Counter;
