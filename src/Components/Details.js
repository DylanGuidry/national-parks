import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
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
    <div>
        {parkID.map(parks => {
            console.log(parks)
            return (
                <div>{parks.fullName}</div>
            )
        })}
    </div>
)
}

export default Details
