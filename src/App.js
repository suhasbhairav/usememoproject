import React, {useState, useMemo} from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(0);
  const [name, setName] = useState('');

 
    const result = useMemo(() => {
      return calculateJustNothing(number);
    }, [number]);   


  function calculateJustNothing(number){
    console.log("test...");
    let i = 0;
    while(i<2800000) i++;
    return Math.random() * number;
  };


  return (
    <div className="App">
      
      The square is: {result}
      <button onClick={() => setNumber( number + 1)}>Increment</button>

      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <DisplayName name={name} />
    </div>
  );
};

const DisplayName = React.memo(({name}) => {
  console.log("inside...");
  return(
    <div>The name is: {name}</div>
  );
});

export default App;
