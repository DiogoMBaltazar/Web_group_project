import { model, Schema } from "mongoose"
import React from 'react';
import { useState } from 'react';

interface Car {car:string, driver:string}

function FormCars({addCar}:any) {
const [car, setcar] = useState("");
const [driver, setdriver] = useState("");

const carsSchema: Schema = new Schema(
    {
        car: {
            type: String,
            required: true,
        },

        driver: {
            type: String,
            required: true,
        }
    }
)



//post new car to server
function createCar(car:Car) {
    fetch("/cars", {
        method: "POST", headers: {
            "content-type":"application/json;charset=UTF-8",
        },
        body: JSON.stringify(car)})
    .then(data => console.log(data))
}

// New Stuff
function updateDriver(car:Car) {
    fetch("/cars", {
        method: "PUT", headers: {
            "content-type":"application/json;charset=UTF-8",
        },
        body: JSON.stringify(car)})
    .then(data => console.log(data))
}

// New Stuff
const submit= (e:any) => {
    e.preventDefault()
    let new_car= {car:car, driver:driver}
    addCar(new_car)
    // We are not using the POST anymore
    // createCar(new_car)

    // New stuff
    updateDriver(new_car)           
    // New stuff
    setcar("")
    setdriver("")
}


return <ul>

    <li><label>Driver</label><input type="text" onChange={e => setdriver(e.target.value)} value={driver}></input></li>

    <li><label>Car Identification</label><input type="text" onChange={e => setcar(e.target.value)} value={car}></input></li>
    
    <li><input type="submit" value="Call Car To Location" onClick={e => { submit(e) }}></input></li>
    
    </ul>

}

export default FormCars;