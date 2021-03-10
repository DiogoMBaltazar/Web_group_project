
import React from 'react';
import { useState } from 'react';

interface Trip {car:string, to:string, duration:string}

function FormTrips({addTrip}:any) {
const [car, setcar] = useState("");
const [to, setto] = useState("");
const [duration, setduration] = useState("");

const submit= (e:any) => {
    addTrip({car:car,to:to, duration:duration})
    e.preventDefault()
    setcar("")
    setto("")
    setduration("")
}


return <ul>

    <li><label>Location</label><input type="text" onChange={e => setto(e.target.value)} value={to}></input></li>

    <li><label>Car Identification</label><input type="text" onChange={e => setcar(e.target.value)} value={car}></input></li>

    <li><label>Duration</label><input type="text" onChange={e => setduration(e.target.value)} value={duration}></input></li>
    
    <li><input type="submit" value="Call Car To Location" onClick={e => { submit(e) }}></input></li>
    
    </ul>

}

export default FormTrips;