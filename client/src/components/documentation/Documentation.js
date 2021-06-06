import React from 'react'
import './Documentation.css'

const Documentation = () => {

    const defaultObj = [
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
    

    return (
        <div className="documentation">
            <h1>Documentation</h1>
            <p>Welcome to the Invincible API! The documentation below will help you get up to speed 
            and get you familiar with the functionality,    
            allowing you to start using this API for your own projects</p>
            <h1>Get all</h1>
            <p>To recieve an array of all Invincible characters , start my making a GET request to the endpoint listed below </p>
            <div className="brick">
                https://invincible-api.herokuapp.com/api/characters
            </div>
            <p>Upon making that request, you should recieve back a JSON object that includes an array of 41 characters similar to this.</p>
            <div className="display-box">
                <pre className="display-text" >
                    {JSON.stringify(defaultObj, null, 5)}  
                </pre>
            </div>
            <p>* Max of three shown</p>
        </div>
    )
}

export default Documentation
