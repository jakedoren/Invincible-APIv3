import React from 'react'
import './Query.css'

const Query = () => {

    const searchArray = [
        {
            "_id": "60b44a8d4e2aec2c2cb664b3",
            "firstname": "Debbie",
            "lastname": "Grayson",
            "image": "https://invincible-api.s3.amazonaws.com/debbiegrayson.png",
            "actor": "Sandra Oh"
        },
        {
            "_id": "60b44a8d4e2aec2c2cb664bb",
            "firstname": "Mark",
            "lastname": "Grayson",
            "image": "https://invincible-api.s3.amazonaws.com/Invincible.jpg",
            "alias": "Invincible",
            "actor": "Steven Yeun"
        },
        {
            "_id": "60b44a8d4e2aec2c2cb664c5",
            "firstname": "Nolan",
            "lastname": "Grayson",
            "image": "https://invincible-api.s3.amazonaws.com/omniman.jpg",
            "alias": "Omniman",
            "actor": "J.K. Simmons"
        }
    ]

    const queriedArray = 
    [
        {
            "_id": "60b44a8d4e2aec2c2cb664b3",
            "firstname": "Debbie",
            "lastname": "Grayson",
            "image": "https://invincible-api.s3.amazonaws.com/debbiegrayson.png",
            "actor": "Sandra Oh"
        }
    ]

    const paginatedArray = [
        {
            "_id": "60b44a8d4e2aec2c2cb664b3",
            "firstname": "Debbie",
            "lastname": "Grayson",
            "image": "https://invincible-api.s3.amazonaws.com/debbiegrayson.png",
            "actor": "Sandra Oh"
        },
        {
            "_id": "60b44a8d4e2aec2c2cb664b4",
            "image": "https://invincible-api.s3.amazonaws.com/docseismic.png",
            "alias": "Doc Seismic",
            "actor": "Chris Diamantopoulos"
        },
        {
            "_id": "60b44a8d4e2aec2c2cb664b5",
            "firstname": "Donald",
            "lastname": "Ferguson",
            "image": "https://invincible-api.s3.amazonaws.com/donaldferguson.png",
            "actor": "Chris Diamantopoulos"
        },
        {
            "_id": "60b44a8d4e2aec2c2cb664b6",
            "firstname": "Doug",
            "lastname": "Cheston",
            "image": "https://invincible-api.s3.amazonaws.com/dougcheston.png",
            "actor": "Justin Roiland"
        },
        {
            "_id": "60b44a8d4e2aec2c2cb664b7",
            "firstname": "Kate",
            "lastname": "Cha",
            "image": "https://invincible-api.s3.amazonaws.com/duplikate.png",
            "alias": "Dupli-Kate",
            "actor": "Malese Jow"
        }
    ]

    return (
        <div className="query">
            <h2>Case Insensitive Search</h2>
            <p>We allow you to query through any of our collections by adding to the end of our endpoint. 
            You have the ability to query through characters by firstname, lastname, alias or by the actor that voices them.</p>
            <h2>Example request</h2>
            <div className="brick" >
                https://invincible-api.herokuapp.com/api/characters/search/:grayson
            </div>
            <p>This should output back to you every character object that contains grayson in either it’s firstname,  
            lastname or alias field. This should look like what’s described below. </p>
            <div className="display-box">
                <pre className="display-text" >
                    {JSON.stringify(searchArray, null, 5)}
                </pre>
            </div>
            <h2>Query Parameters</h2>
            <p>The API allows for use of query parameters to query through  characters and episodes with precision. For example, 
                the request below would query all objects by lastname, 
                finding all objects with Grayson for the last name and then searching and finding the object that also has a firstname of Debbie.
            </p>
            <div className="brick">
                https://invincible-api.herokuapp.com/api/characters?lastname=Grayson&firstname=Debbie
            </div>
            <p>This request would return something like this.</p>
            <div className="display-box">
                <pre className="display-text" >
                    {JSON.stringify(queriedArray, null, 5)}
                </pre>
            </div>
            <h2>Pagination</h2>
            <p>The Invincible API has built in pagination. In order to paginate we allow you to query by page and limit. When using the page query parameter page starts at 1. If you were to input page 2 + a limit of 5 you would be ouput the second page of the array containing 5 characters per page.</p>
            <div className="brick">
                https://invincible-api.herokuapp.com/api/characters?page=2&limit=5
            </div>
            <p>This request would output you a set of characters paginated by 5 per page, starting on page 2, skipping the first 5 characters(the first page).</p>
            <div className="display-box">
                <pre className="display-text" >
                    {JSON.stringify(paginatedArray, null, 5)}
                </pre>
            </div>
        </div>
    )
}

export default Query
