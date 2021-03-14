import { model, Schema } from "mongoose"
import React from 'react';
import { useState } from 'react';

interface Trip {car:string, to:string, duration:string}

function FormTrips({addTrip}:any) {
const [car, setcar] = useState("");
const [to, setto] = useState("");
const [duration, setduration] = useState("");


const tripsSchema: Schema = new Schema(
    {
        car: {
            type: String,
            required: true,
        },

        to: {
            type: String,
            required: true,
        },
        
        duration: {
            type: Number,
            required: true,
        }
    }
)


//post new trip to server
function createTrip(trip:Trip) {
    fetch("/trips", {
        method: "POST", headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(trip) })
    .then( data => console.log(data) )
}

const submit= (e:any) => {
    e.preventDefault()
    let trip = {car:car, to:to, duration:duration}
    addTrip(trip)
    createTrip(trip)
    //e.preventDefault()
    setcar("")
    setto("")
    setduration("")
}


return <ul>

    <li><label>Car Identification</label><input type="text" onChange={e => setcar(e.target.value)} value={car}></input></li>

    <li><label>Location</label><input type="text" onChange={e => setto(e.target.value)} value={to}></input></li>

    <li><label>Duration</label><input type="text" onChange={e => setduration(e.target.value)} value={duration}></input></li>
    
    <li><input type="submit" value="Call Car To Location" onClick={e => { submit(e) }}></input></li>
    
    </ul>

}

export default FormTrips;