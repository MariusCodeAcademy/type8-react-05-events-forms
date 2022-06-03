// Login.jsx componentas
function Login() {
  // sukuri displayValue funkcija su test console.log
  function displayValue() {
    console.log('displayValue called');
  }
  return (
    <div className='login'>
      {/* // vienas input type text */}
      <input type='text' placeholder='Login here' />
      {/* // vienas button */}
      <button onClick={displayValue}>Submit</button>
    </div>
  );
}
// paspaudus button iskvieciam funkcija displayValue
// susikurti state kuriame saugosim username

export default Login;
