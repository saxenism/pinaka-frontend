import { useState } from 'react';
import './App.css'

function App() {

  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [thankYouText, setThankYouText] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState('Submit');
  const [submitButtonColor, setSubmitButtonColor] = useState('bg-indigo-800');

  function handleSubmit(event) {
    event.preventDefault();

    console.log(email);

    setEmail('');
    setDisabled(true);
    setThankYouText(true);
    setSubmitButtonText('Submitted');
    setSubmitButtonColor('bg-green-400');
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
          onSubmit={handleSubmit} 
          className='mb-3'
        >
          <input type="hidden" name="pinaka-Emails" value="chadEmails"/>
          <label className='text-xl mb-3'>
            Interested to know more? Join the waitlist
              <br />
              <input 
                id='chadEmail' 
                placeholder = 'Enter e-mail' 
                disabled = {disabled}
                className = "py-1 text-gray-800 text-center mr-3"
                onChange={event => setEmail(event.target.value)}
                value={email}
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
          thankYouText ? 
          <h3 class="text-lg text-center">
            Thank you for your interest Chad. Will get back to you soon.
          </h3> :
          null
        }
      </div>
    </div>
  );
}
export default App;