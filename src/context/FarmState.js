import react, { useState } from "react";
import farmContext from "./farmContext";
const FarmState = (props) => {
    // const host="http://localhost:5000"
    const farm = [];
    const [farms, setFarms] = useState(farm);

    //show all farm
    const showFarms = async () => {
        //API Call
        const response = await fetch('http://localhost:5000/farm/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        setFarms(data);
    }


    //create farm
    const createFarm = async (farm_name, balance, message, status) => {
        //API Call
        const response = await fetch('http://localhost:5000/farm/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ farm_name, balance, message, status })
        });
        const data = await response.json();

        setFarms(farms.concat(data))
    }

    // delete farm
    const deleteFarm = async (id) => {
        //API Call
        const response = await fetch(`http://localhost:5000/farm/delete:${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);

        //logic to show in client site or UI
        const newFarm = farms.filter((farm) => { return farm._id !== id })
        setFarms(newFarm);
    }

    return (

        <farmContext.Provider value={{ farms, setFarms, createFarm, showFarms, deleteFarm }}>
            {props.children}
        </farmContext.Provider>
    )
}

export default FarmState;