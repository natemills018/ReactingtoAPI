import React from "react";
import { useState, useEffect } from "react";

const PeopleComponent = () => {

    const [peopleList, setPeopleList] = useState([])


    useEffect(() => {
        fetch('https://api-ghibli.herokuapp.com/people')
            .then(res => res.json())
            .then(allPeople => setPeopleList(allPeople))
    }, [])


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">



               
                    {peopleList.map((PersonObject) => (
                        <div className="col-md-3 m-3 card" key={`div-${peopleList.id}`}>
                            <div className="card-body">
                                <h1>{PersonObject.name}</h1>
                            </div>
                            <ul>
                                <li>
                                    <em>{PersonObject.gender}</em>
                                </li>
                                <li>
                                    <em>{PersonObject.age}</em>
                                </li>
                            </ul>


                        </div>
                    ))}
                



            </div>
        </div>

    )
}

export default PeopleComponent;