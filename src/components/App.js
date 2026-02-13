import React, { useState } from 'react'
import { data } from './data';

const App = () => { 
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [error , setError] = useState({ email: '', password: '' });

  function checkUser(data){
    const user = data.find(
      (ele) => ele.email === email && ele.password === password
    );

    if (!user) {
        console.log('Error: Email not found');
        setError({ email: 'Email not found', password: '' });
      } 
      else if (user.password !== password) {
        console.log('Error: Incorrect password');
        setError({ email: '', password: 'Incorrect password' });
      } 
      else {
        console.log(user);
      }
  }

  function handleSubmit(e){
    e.preventDefault();   // prevent page reload
    
    if (!email || !password) {
      setError( {email: !email ? 'Email is required' : '',
        password: !password ? 'Password is required' : ''});
      return;
    }
   
    setTimeout(() => {
      checkUser(data);
    }, 300);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
           <input 
          id="input-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  
          type="text" 
          placeholder='Enter email'  
        /> 
        {error.email && (
            <p id='user-error' style={{ color: 'red', margin: 0 }}>{error.email}</p>
          )}
          </div>
       

         <div>
          <input 
           id = 'input-password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          {error.password && (
            <p id='password-error' style={{ color: 'red', margin: 0 }}>{error.password}</p>
          )}
        </div>

        <button id="submit-form-btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;

