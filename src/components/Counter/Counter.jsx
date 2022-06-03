import { useState } from 'react';

function Counter() {
  // let counterValue = 0
  const [counterValue, setCounterValue] = useState(0);

  // parasyti funkcija handleCounterIncrement() kuri didina counterValue 1
  function handleCounterIncrement() {
    setCounterValue((prevState) => prevState + 1);
  }
  // parasyti funkcija handleCounterDecrement() kuri mazina counterValue 1
  const handleCounterDecrement = () => {
    if (counterValue <= 0) {
      return;
    }
    setCounterValue((prevState) => prevState - 1);
  };

  const isCounterPositive = counterValue !== 0;
  // parasyti funkcija handleCounterChange() kuri mazina arba didina counterValue 1

  // handleCounterIncrement() infinite loop

  // toliau-1 neleisti skaiciaus padaryti neigiamu

  // toliau-2 leisti neigiama. jei teigiamas tai zalias skaiciaus jei neigiamas tai raudonas

  // toliau-3 prideti mygtuka 'reset' kuris nunulina counteri

  return (
    <div className='counter'>
      <h3 onMouseEnter={() => console.log('Patrauk kursoriu!!!')}>Push ups Counter</h3>
      <h2>{counterValue}</h2>
      <div className='control'>
        <button onClick={handleCounterIncrement} className='btn'>
          plus
        </button>
        {isCounterPositive && (
          <button
            disabled={!isCounterPositive}
            onClick={handleCounterDecrement}
            className='btn'
          >
            minus
          </button>
        )}
      </div>
    </div>
  );
}

export default Counter;
