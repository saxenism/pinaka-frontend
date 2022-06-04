import { useState } from 'react';
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [thankYouTextVisible, setThankYouTextVisible] = useState(false);
  const [disableEmail, setDisableEmail] = useState(false);
  const [submitButtonColor, setSubmitButtonColor] = useState('bg-indigo-800');
  const [submitButtonText, setSubmitButtonText] = useState('Submit');

  function handleSubmit(event) {
   console.log("handleSubmit started running");   
   event.preventDefault();

   console.log(email);
   setEmail('');
   setSubmitButtonColor('bg-green-400');
   setSubmitButtonText('Submitted');
   setThankYouTextVisible(true);
   setDisableEmail(true);
  }

  return (
    <div className ="text-center align-middle">
      <div className="align-middle my-8 text-gray-100 ">
        <h1 className='text-3xl align-middle'>Welcome to Pinaka</h1>
        <h3 class="text-2xl text-center">The web3 enabled evolution of e-commerce</h3>
        <br />
        <form 
          name='chadEmails'
          method='post'
          data-netlify="true" 
          onSubmit="submit" 
          className='mb-3'
        >
          <input type="hidden" name="chadEmails" value="chadEmails"/>
          <label className='text-xl mb-3'>
            Interested to know more? Join the waitlist
              <br />
              <input 
                id='chadEmail' 
                disabled = {disableEmail}
                placeholder = 'Enter e-mail' 
                className = "py-1 text-gray-800 text-center mr-3" 
                onChange={event => setEmail(event.target.value)}
                value = {email}
                type="email" 
                name='email'
              />
              <button 
                type='submit'
                className={`py-1.5 px-8 ${submitButtonColor} text-white font-bold`}>
                  {submitButtonText}
                </button>
          </label>
        </form>
        {
          thankYouTextVisible ? 
            <h3>Thank you Chad. Will follow up soon.</h3>
          : null
        }
      </div>
    </div>
  );
}
export default App;