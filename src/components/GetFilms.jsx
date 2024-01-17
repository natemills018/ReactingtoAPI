import React from "react";
import { useState, useEffect } from "react";

const GetFilms = () => {

    const [films, setFilms] = useState([])


    useEffect(() => {
        fetch('https://api-ghibli.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilms(allFilms))
    }, [])


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">

                <div className="card">
                    <div className="card-body">
                        <div>
                            {films.map((filmObject) => {
                                <div className="col-md-3" key={`div-${films}`}>
                                    <div className="card-title">
                                        <h1>{filmObject.original.title}</h1>
                                    </div>
                                    <em>{filmObject.director}</em>
                                    <em>{filmObject.rt.score}</em>
                                </div>
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default GetFilms;