// Login.jsx componentas
import { useState } from 'react';

function Login() {
  const [usernameValue, setUsernameValue] = useState('');
  const [showUsername, setShowUsername] = useState(false);

  /**
   * take input value from input and update state with it
   */
  function usernameEnterHandler(event) {
    console.log('entering value to input');
    console.log(event.target); // ===  <input type='text' placeholder='Login here' />
    const inputEl = event.target;
    const ivestaReikme = inputEl.value;
    setUsernameValue(ivestaReikme);
  }

  return (
    <div className='login'>
      <input
        onChange={usernameEnterHandler}
        value={usernameValue}
        type='text'
        placeholder='Login here'
      />
      <h3>Jus ivedete: {usernameValue}</h3>

      <button onClick={sendValues}>send</button>
      {showUsername && <h2>{usernameValue}</h2>}
    </div>
  );

  function sendValues() {
    // send values
    // clear inputs
    setUsernameValue('');
  }

  function displayValue() {
    console.log('displayValue called');
    setShowUsername(!showUsername);
  }
}

export default Login;
