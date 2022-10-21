import React, { useState } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import '../Components/SearchBarv2.scss'
import Search from '../Images/Search-Icon.png'


const SearchBarv2 = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const navigate = useNavigate();

    function handleChange(e) {
        setSearchInput(e.target.value)
    }

function handleSubmit(e) {
        e.preventDefault()
        // navigate(`/parks/${searchInput}`)
        fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${searchInput}&api_key=dB1g9bsxb3Z0lvyFbph5S0CF7z7UbmJp7NbDEWEd`)
            .then(res => res.json())
            .then(searchData => {
                setSearchResults(searchData.data)
                // console.log(searchData.data)
                }
            )
    }   
    
    
    function handleClick(e) {
        console.log('Fired')
        // navigate(`/park/${searchData.id}`)  
    }

    return (
        <>
            <section>
                <section class='Container'>
                    <div class="search-box fadeInUp animate one">
                        <form class='Input-Container' onSubmit={handleSubmit}>
                            <select class='Search-Input fadeInUp animate one' onChange={(e) => handleChange(e)} value={searchInput} id='states'>
                                <option class='Options-States' value="AL">Alabama</option>
                                <option class='Options-States' value="AK">Alaska</option>
                                <option class='Options-States' value="AZ">Arizona</option>
                                <option class='Options-States' value="AR">Arkansas</option>
                                <option class='Options-States' value="CA">California</option>
                                <option class='Options-States' value="CO">Colorado</option>
                                <option class='Options-States' value="CT">Connecticut</option>
                                <option class='Options-States' value="DE">Delaware</option>
                                <option class='Options-States' value="FL">Florida</option>
                                <option class='Options-States' value="GA">Georgia</option>
                                <option class='Options-States' value="HI">Hawaii</option>
                                <option class='Options-States' value="ID">Idaho</option>
                                <option class='Options-States' value="IL">Illinois</option>
                                <option class='Options-States' value="IN">Indiana</option>
                                <option class='Options-States' value="IA">Iowa</option>
                                <option class='Options-States' value="KS">Kansas</option>
                                <option class='Options-States' value="KY">Kentucky</option>
                                <option class='Options-States' value="LA">Louisiana</option>
                                <option class='Options-States' value="ME">Maine</option>
                                <option class='Options-States' value="MD">Maryland</option>
                                <option class='Options-States' value="MI">Michigan</option>
                                <option class='Options-States' value="MN">Minnesota</option>
                                <option class='Options-States' value="MO">Missouri</option>
                                <option class='Options-States' value="MS">Mississippi</option>
                                <option class='Options-States' value="MT">Montana</option>
                                <option class='Options-States' value="NE">Nebraska</option>
                                <option class='Options-States' value="NV">Nevada</option>
                                <option class='Options-States' value="NH">New Hampshire</option>
                                <option class='Options-States' value="NJ">New Jersey</option>
                                <option class='Options-States' value="NM">New Mexico</option>
                                <option class='Options-States' value="NY">New York</option>
                                <option class='Options-States' value="NC">North Carolina</option>
                                <option class='Options-States' value="ND">North Dakota</option>
                                <option class='Options-States' value="OH">Ohio</option>
                                <option class='Options-States' value="OK">Oklahoma</option>
                                <option class='Options-States' value="OR">Oregon</option>
                                <option class='Options-States' value="PA">Pennsylvania</option>
                                <option class='Options-States' value="RI">Rhode Island</option>
                                <option class='Options-States' value="SC">South Carolina</option>
                                <option class='Options-States' value="SD">South Dakota</option>
                                <option class='Options-States' value="TN">Tennessee</option>
                                <option class='Options-States' value="TX">Texas</option>
                                <option class='Options-States' value="UT">Utah</option>
                                <option class='Options-States' value="VT">Vermont</option>
                                <option class='Options-States' value="VA">Virginia</option>
                                <option class='Options-States' value="WA">Washington</option>
                                <option class='Options-States' value="WV">West Virginia</option>
                                <option class='Options-States' value="WI">Wisconsin</option>
                                <option class='Options-States' value="WY">Wyoming</option>
                            </select>
                            <button class='search-button' onChange={(e) => handleChange(e)} value={searchInput}><img src={Search} width='30px' class='Image-Search-Button'/></button>
                        </form>
                    </div>
                </section>
                <section className='all-images'>
                    {searchResults.map(result => {
                        console.log(result)
                        const image = result.images[0].url;
                        return (
                            <section>
                                <div className='Result-Container'>
                                    <section class='Image-Container fadeInUp animate one'>
                                        <div className='Results'>{result.name}</div>
                                        <Link to={`/park/${result.id}`}><img onClick={handleClick} class='Images-Search' src={image} alt='park'></img></Link>
                                    </section>
                                </div>
                            </section>
                        )
                    })}
                </section>
            </section>
        </>
    )
}

export default SearchBarv2
