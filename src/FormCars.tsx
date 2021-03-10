
import React from 'react';
import { useState } from 'react';

interface Car {car:string, driver:string}

function FormCars({addCar}:any) {
const [car, setcar] = useState("");
const [driver, setdriver] = useState("");

const submit= (e:any) => {
    addCar({car:car, driver:driver})
    e.preventDefault()
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