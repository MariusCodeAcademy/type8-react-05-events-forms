// Login.jsx componentas
import { useState } from 'react';

function Login() {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [showUsername, setShowUsername] = useState(false);

  /**
   * take input value from input and update state with it
   */
  function usernameEnterHandler(event) {
    // console.log('entering value to input');
    // console.log(event.target); // ===  <input type='text' placeholder='Login here' />
    const inputEl = event.target;
    const ivestaReikme = inputEl.value;
    setUsernameValue(ivestaReikme);
  }
  function passwordEnterHandler(event) {
    setPasswordValue(event.target.value);
  }

  // prideti slaptazodzio ivesties lauka
  // sujungti slaptazodi su state two way binding
  // isvalyti slaptazodi mygtuko paspaudimu

  return (
    <div className='login'>
      <input
        onChange={usernameEnterHandler}
        value={usernameValue}
        type='text'
        placeholder='Login here'
      />
      <input
        onChange={passwordEnterHandler}
        value={passwordValue}
        type='password'
        placeholder='Password'
      />

      <h3>Jus ivedete: {usernameValue}</h3>

      <button onClick={sendValues}>send</button>
      {showUsername && <h2>{usernameValue}</h2>}
    </div>
  );

  function sendValues() {
    // send values
    // pagaminti objekta is input reiksmiu
    // kai mums reikia reiksmiu mes imam is state
    // nes sate yra sinkronizuota su inputais
    const loginObj = {
      username: usernameValue,
      password: passwordValue,
    };
    console.log('loginObj ===', loginObj);

    // clear inputs
    setUsernameValue('');
    setPasswordValue('');
  }

  function displayValue() {
    console.log('displayValue called');
    setShowUsername(!showUsername);
  }
}

export default Login;
