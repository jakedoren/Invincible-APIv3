import React from 'react'
import './Documentation.css'

const Documentation = () => {

    const getAllDefault = [
        {
            "_id": "60b44a8d4e2aec2c2cb664a9",
            "firstname": "Art",
            "lastname": "Rosenbaum",
            "image": "https://invincible-api.s3.amazonaws.com/artrosenbaum.png",
            "actor": "Mark Hamill"
        },
        {
            "_id": "60b44a8d4e2aec2c2cb664aa",
            "firstname": "Samantha",
            "lastname": "Wilkins",
            "image": "https://invincible-api.s3.amazonaws.com/atomeve.png",
            "alias": "Atom Eve",
            "actor": "Gillian Jacobs"
        },
        {
            "_id": "60b44a8d4e2aec2c2cb664ab",
            "firstname": "Atom Eve's Parents",
            "lastname": "Wilkins",
            "image": "https://invincible-api.s3.amazonaws.com/atomeveparents.jpg"
        },

    ]

    const getOneDefault = 
    {
        "_id": "60b44a8d4e2aec2c2cb664b6",
        "firstname": "Doug",
        "lastname": "Cheston",
        "image": "https://invincible-api.s3.amazonaws.com/dougcheston.png",
        "actor": "Justin Roiland"
    }
    
    

    return (
        <div className="documentation">
            <h2>Documentation</h2>
            <p>Welcome to the Invincible API! The documentation below will help you get up to speed 
            and get you familiar with the functionality,    
            allowing you to start using this API for your own projects.</p>
            <h2>Get all</h2>
            <p>To recieve an array of all Invincible characters , start my making a GET request to the endpoint listed below. </p>
            <div className="brick">
                https://invincible-api.herokuapp.com/api/characters
            </div>
            <p>Upon making that request, you should recieve back a JSON object that includes an array of 41 characters similar to this.</p>
            <div className="display-box">
                <pre className="display-text" >
                    {JSON.stringify(getAllDefault, null, 5)}  
                </pre>
            </div>
            <p>* Max of three shown</p>
            <h2>Get one</h2>
            <div className="brick">
                https://invincible-api.herokuapp.com/api/characters/60b44a8d4e2aec2c2cb664b6
            </div>
            <p>We allow you to get just one character by utilizing the objects ID. Example below.</p>
            <div className="display-box">
                <pre className="display-text">
                    {JSON.stringify(getOneDefault, null, 5)}
                </pre>
            </div>
            <h2>Get random</h2>
            <p>The Invincible API has the ability to output a random character or episode built into the server. 
            To get a randomly generated request, make a GET request like so, to an endpoint.</p>
            <div className="brick">
                https://invincible-api.herokuapp.com/api/characters/random
            </div>
        </div>
    )
}

export default Documentation
