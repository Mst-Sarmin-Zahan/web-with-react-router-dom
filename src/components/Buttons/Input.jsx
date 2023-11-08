import{ useState } from 'react';

function MyComponent() {
  // Define a state variable to hold the user's input
  const [userInput, setUserInput] = useState('');

  // Define an event handler to update the state with user input
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>

      <label>
        Type something:
        <input  placeholder='Name'  type="text" value={userInput} onChange={handleInputChange} />
      </label>
      <p>You entered: {userInput}</p>
    </div>
  );
}

export default MyComponent;