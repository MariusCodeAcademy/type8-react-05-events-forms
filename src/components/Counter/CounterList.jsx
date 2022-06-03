import Counter from './Counter';
import { useState } from 'react';

const initCounters = [
  { id: 1, title: 'Push ups', value: 0 },
  { id: 3, title: 'Sit ups', value: 0 },
  { id: 2, title: 'Bench pressups', value: 0, startValue: 5 },
];

function CounterList() {
  const [countersArr, setcountersArr] = useState(initCounters);

  function changeCounterValue(id, newValue) {}

  return (
    <div>
      <h2>Here is out counters</h2>
      <div className='grid'>
        {countersArr.map((cObj) => (
          <Counter key={cObj.id} title={cObj.title} startValue={cObj.startValue} />
        ))}

        {/* <Counter title={'Sit ups'} />
        <Counter title={'Bench pressups'} startValue={5} /> */}
      </div>
    </div>
  );
}

export default CounterList;
