import { useState, useEffect} from "react"
import './SCSS/default.scss';

import FormTrips from "./formTrips";
import ListTrips from "./listTrips";
import BarChart from "./barChart";
import FormCars from "./FormCars";
import ListCars from "./ListCars";
import CarChart from "./carChart"

interface Trip {car:string, to:string, duration:number}
interface Car {car:string, driver:string}

function Header() {
    return <header> <img src="NovaSbeLogo.jpg" height="50px"  />Trips Dashboard </header>
}

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        
                        <h3>Project developed by: </h3>
                        <ul>
                            <li>Matteo Matera, nº MISSING</li>
                            <li>João Ribeiro, nº 32399</li>
                            <li>Diogo Baltazar, nº29134</li>
                        </ul>
                    </div>

                    <div className="col-sm-6 col-md-3 item">
                        <h3>Find our repo at </h3>
                        <ul>
                            <li><a href="https://github.com/DiogoMBaltazar/Web-Cloud-Computing-Final-Project" target='_blank'>Github</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </footer>
            
        

    )
}


function App() {
    const [trips, setTrips]=  useState([] as Trip[])
    const [cars, setCars]= useState([] as Car[])

    //fetch trips from server
    function loadTrips() {
        fetch("/trips")
        .then(data => data.json())
        .then(trips => setTrips(trips))
    }
    useEffect(loadTrips, [])

    //fetch cars from server
    function loadCars() {
        fetch("/cars")
        .then(data => data.json())
        .then(cars => setCars(cars))
    }
    useEffect(loadCars, [])

    const addTrip = (log:any) => {
        setTrips([...trips,log])
    }

    const addCar = (log:any) => {
        setCars([...cars, log])
    }
    //<h1>Webpage</h1>
        //<p>{trips.map(home => <div>{home.car}-----{home.to}-----{home.duration}</div>)}</p>
       // <div style={{width:"45%", display:"inline-block"}}>
        //</div>/div>
        //<div style={{width:"45%", display:"inline-block"}}>
        //<p>Hello</p>
        //<p>{cars.map(home => <div>{home.car}-----{home.driver}</div>)}</p>
        //</div>

    return <>            
        
        <Header/>
        <div style={{width:"45%", display:"inline-block", textAlign:'center'}}>
            <h2>Call a Car</h2>
            <ListTrips trip= {trips}/>
            <FormTrips addTrip= {addTrip}/>
            <BarChart trips= {trips}/>
        </div>
        <div style={{width:"45%", display:"inline-block", textAlign:'center'}}>
            <h2>Add a Car </h2>
            <ListCars car= {cars}/>
            <FormCars addCar= {addCar}/>
            <CarChart trips= {trips}/>
        </div>
        <Footer/>

            
    </>
}

export default App;