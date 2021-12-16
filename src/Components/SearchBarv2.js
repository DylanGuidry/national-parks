import React, { useState } from 'react'
import '../Components/SearchBarv2.scss'

const SearchBarv2 = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchResults, setSearchResults] = useState([])

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
            })
    }

    return (
        <>
        <section>
            <section class='Container'>
                <div class="search-box fadeInUp animate one">
                    <form class='Input-Container' onSubmit={handleSubmit}>
                        <input class='Search-Input fadeInUp animate one' onChange={(e) => handleChange(e)} value={searchInput} type="text" placeholder='Search by State Code...'></input>
                        <i id="icon" class="search"></i>
                    </form>
                </div>
            </section>
            <section className='all-images'>
            {searchResults.map(result => {
                console.log(result)
                const image = result.images[0].url;
                // console.log(result.images[0].url)
                return (
                <section>
                    <div className='Result-Container'>
                        <section class='Image-Container fadeInUp animate one'>
                            <div className='Results'>{result.name}</div>
                            <img class='Images-Search' src={image} alt='park'></img>
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
