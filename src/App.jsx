import React, { useState } from "react";
import FilmComponent from "./components/FilmComponent";
import PeopleComponent from "./components/PeopleComponent"


const App = () => {

    const [loaded, setLoaded] = useState(false);
    const [people, setPeople] = useState(false);

    const toggleActive = () => {
        setLoaded(!loaded);
    }

    const toggleActive2 = () => {
        setPeople(!people);
    }


    const handleButtonClick = () => {

    }

    if (loaded) {
        return (

            <div>
                < FilmComponent />
            </div>

        )
    } else if (people) {
        return (
            <div>

                < PeopleComponent />

            </div>
        )
    } else
    // && 

    return (

        <div>



            <div className="container justify-content-center">
                <h1 className="">Home Page!</h1>
                <button onClick={toggleActive} className='badge bg-primary text-wrap style'>Press this button to get to the films</button>
                <button onClick={toggleActive2} className='badge bg-primary text-wrap style'>Press this button to get to the people</button>
            </div>


        </div>
    );
}

export default App;