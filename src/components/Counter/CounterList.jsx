import Counter from './Counter';

function CounterList() {
  return (
    <div>
      <h2>Here is out counters</h2>
      <div className='grid'>
        <Counter title={'Push ups'} />
        <Counter title={'Sit ups'} />
        <Counter title={'Bench pressups'} startValue={5} />
      </div>
    </div>
  );
}

export default CounterList;
