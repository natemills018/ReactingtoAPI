import React from "react";
import { useState, useEffect } from "react";

const FilmComponent = () => {

    const [films, setFilms] = useState([])


    useEffect(() => {
        fetch('https://api-ghibli.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilms(allFilms))
    }, [])


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">



               
                    {films.map((filmObject) => (
                        <div className="col-md-3 m-3 card" key={`div-${films.id}`}>
                            <div className="card-body">
                                <h1>{filmObject.original_title}</h1>
                            </div>
                            <ul>
                                <li>
                                    <em>{filmObject.director}</em>
                                </li>
                                <li>
                                    <em>{filmObject.rt_score}</em>
                                </li>
                            </ul>


                        </div>
                    ))}
                



            </div>
        </div>

    )
}

export default FilmComponent;