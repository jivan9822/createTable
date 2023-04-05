import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import DisplayTable from './DisplayTable';

function App() {
  const [num, setNum] = useState(0);

  return (
    <div className='App'>
      <div className='inputDiv'>
        <label>Please Enter a Num:</label>
        <input type='number' onChange={(e) => setNum(e.target.value)} />
      </div>
      <DisplayTable number={num} />
    </div>
  );
}

export default App;
