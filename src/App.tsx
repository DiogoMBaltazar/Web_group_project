import { useState} from "react"

import FormTrips from "./formTrips";
import ListTrips from "./listTrips";
import BarChart from "./barChart";
import FormCars from "./FormCars";
import ListCars from "./ListCars";
import CarChart from "./carChart"

interface Trip {car:string, to:string, duration:number}
interface Car {car:string, driver:string}
let initialTrip : Trip[] = [
    {car:"aaaaaaaa", to:"Milano", duration:12}
  ]

let initialCar : Car[] = [
    {car:"hbhdjd", driver:"Matteo"}
]

function App() {
    const [trips, setTrips]=  useState(initialTrip)
    const [cars, setCars]= useState(initialCar)

    const addTrip = (log:any) => {
        setTrips([...trips,log])
    }

    const addCar = (log:any) => {
        setCars([...cars, log])
    }
    

    return <>
        <h1>Webpage</h1>
        <div style={{width:"45%", display:"inline-block"}}>
            <p>{trips.map(home => <div>{home.car}-----{home.to}-----{home.duration}</div>)}</p>
        </div>
        <div style={{width:"45%", display:"inline-block"}}>
            <p>{cars.map(home => <div>{home.car}-----{home.driver}</div>)}</p>
        </div>
            
        <div style={{width:"45%", display:"inline-block"}}>
            <h2>Call a Car</h2>
            <ListTrips trip= {trips}/>
            <FormTrips addTrip= {addTrip}/>
            <BarChart trips= {trips}/>
        </div>
        <div style={{width:"45%", display:"inline-block"}}>
            <h2>Add a Car </h2>
            <ListCars car= {cars}/>
            <FormCars addCar= {addCar}/>
            <CarChart trips= {trips}/>
        </div>
        <footer>This is a footer</footer>

            
    </>
}

export default App;