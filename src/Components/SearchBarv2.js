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
                console.log(searchData.data)
            })
    }

    return (
        <>
            <div class="search-box fadeInUp animate one">
                <form onSubmit={handleSubmit}>
                    <input class='Search-Input fadeInUp animate one' onChange={(e) => handleChange(e)} value={searchInput} type="text" placeholder='Search by State Abbreviation...'></input>
                    <i id="icon" class="search"></i>
                </form>
            </div>
            {searchResults.map(result => {
                console.log(result)
                return (
                    <div className='Result-Container'>
                        <div className='Results'>{result.name}</div>
                    </div>
                )
            })}
        </>
    )
}

export default SearchBarv2
