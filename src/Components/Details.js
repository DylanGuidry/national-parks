import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Footer from './Footer.js';
import './Details.scss'

const Details = () => {
const [parkID, setParkID] = useState([])
const { id } = useParams();
// console.log(id)

useEffect(() => {
    getAPI()
}, [])

const getAPI = () => {
fetch(`https://developer.nps.gov/api/v1/parks?stateCode=&api_key=dB1g9bsxb3Z0lvyFbph5S0CF7z7UbmJp7NbDEWEd&q=${id}`)
.then(res => res.json())
.then(parkID => {
    setParkID(parkID.data)
    // console.log(parkID.data)
})
};

return (
    <div class="fadeInUp animate one">
        {parkID.map(parks => {
            console.log(parks)
            const image = parks.images[0].url;
            const phoneNumber = parks.contacts.phoneNumbers[0].phoneNumber;
            const emails = parks.contacts.emailAddresses[0].emailAddress
            return (
                <div>
                    <div class='text-align'>
                        <div class='font-details'>
                            {parks.name}
                        </div>
                    </div>
                    <img class="Image" src={image}></img>
                        <div class='des-box'>
                            <div class='des'>
                                {parks.description}
                            </div>
                            <div class='Constact-Info'>
                                <div class='phone'>
                                    <b>Phone Number:</b> {phoneNumber}
                                </div>
                                <div class='emails'>
                                    <b>Email:</b> {emails}
                                </div>
                            </div>
                        </div>
                        <div class="All-Containers">
                        <div class="Info-Container-Fee">
                                    <div class="Title-Box">
                                        <h1 class='fees'>
                                            FEES
                                        </h1>
                                    </div>
                                    <div class="Info-Box"> 
                                        <p class='fee-details'> Entrance Fee: ${parks.entranceFees[0].cost} - <i>{parks.entranceFees[0].description}</i></p>
                                        {/* <p class='fee-details'> Entrance Pass: ${parks.entrancePasses[0].cost} - <i>{parks.entrancePasses[0].description}</i></p> */}
                                    </div>
                            </div>
                            <div class="Info-Container">
                                <div class="Title-Box">
                                    <h1 class='fees'>
                                        DIRECTIONS
                                    </h1>
                                </div>
                                <div class="Info-Box">
                                    <p class='fee-details'> General Directions: <i>{parks.directionsInfo}</i></p>
                                    <a href={parks.directionsUrl}><p class='specific-details'> Click Here Specific Directions</p></a>
                                </div>
                            </div>
                            <div class="Info-Container">
                                <div class="Title-Box">
                                    <h1 class='fees'>
                                        HOURS
                                    </h1>
                                </div>
                                <div class="Info-Box">
                                    <p class='fee-details'>{parks.operatingHours[0].name}</p>
                                    <p class='fee-details'>{parks.operatingHours[0].description}</p>
                                </div>
                            </div>
                            <div class="Info-Container-Fee">
                                    <div class="Title-Box">
                                        <h1 class='fees'>
                                            ACTIVITIES
                                        </h1>
                                    </div>
                                    <div class="Info-Box"> 
                                        <p class='park-fun'>1. {parks.activities[0].name}</p>
                                        <p class='park-fun'>2. {parks.activities[1].name}</p>
                                        <p class='park-fun'>3. {parks.activities[2].name}</p>
                                        <p class='park-fun'>4. {parks.activities[3].name}</p>
                                        <p class='park-fun'>5. {parks.activities[4].name}</p>
                                        <p class='park-fun'>6. {parks.activities[5].name}</p>
                                        <p class='park-fun'>7. {parks.activities[6].name}</p>
                                    </div>
                            </div>
                    </div>
                </div>
            )
        })}
        <Footer/>
    </div>
)
}

export default Details
