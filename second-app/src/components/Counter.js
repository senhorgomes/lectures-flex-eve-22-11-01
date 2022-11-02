import {useState} from 'react';

//Want two thing, a header, and a button that displays how many clicks I've done so far
// function Counter(props) {
function Counter({header, defaultClicks}) {

    const [amountOfClicks, setAmountOfClicks] = useState(defaultClicks || 0);

    return (
      <div>
        <h2>{header}</h2>
        <h3>Amount of clicks: {amountOfClicks}</h3>
                                            {/* We never modify state directly  >:( */}
        <button onClick={()=>{
            setAmountOfClicks((previousState)=>previousState + 1)
            }}>Click me!
        </button>
      </div>
    );
  }
  
  export default Counter;