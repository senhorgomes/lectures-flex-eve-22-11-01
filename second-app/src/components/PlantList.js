//Sample data is being imported. Now the data could be brought down via props, from another Parent
import plantsData from '../data/data.json';
import Plant from './Plant';
//This single component will render, and its children will be more components(Plant)
function PlantList(props) {
    const plantLogger = (name) => {
        console.log(name);
    }
    return (
        <ul>
            {/* Because plantsData an array. For each element(Plant object) in plantsData, we are rendering a Plant component */}
            {plantsData.map((plant)=>{
                return <Plant {...plant} onPlant={plantLogger}/>
                // return <Plant name={plant.name} last_watered={plant.last_watered} freq_of_water={plant.freq_of_water}/>
            })}
            {/* Because of how React is built, if we wrapped the PlantList component in anything else, it will render below. */}
            {props.children}
        </ul>
    );
  }
  
  export default PlantList;