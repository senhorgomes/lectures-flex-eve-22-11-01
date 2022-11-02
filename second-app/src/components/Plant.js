
//This will return a SINGLE li item. It is a component to render a single plant from the plantsData.json
function Plant({name, last_watered, freq_of_water, onPlant}) {

    return (
      <li>
        <h2>Name: {name}</h2>
        <h2>Last time water: {last_watered}</h2>
        <h2>I should be watered every {freq_of_water} days</h2>
        {/* <button onClick={()=>{plantLogger("Plant 1")}}>Click me!</button> */}
        <button onClick={()=>{onPlant(name)}}>Click me!</button>
      </li>
    );
  }
  
  export default Plant;