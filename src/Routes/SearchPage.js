import React from 'react'
import Navbar from '../Components/Navbar';
import '../Routes/Homepage.scss';
import Footer from '../Components/Footer.js';
import './SearchPage.scss';
import SearchBarv2 from '../Components/SearchBarv2.js';

const SearchPage = () => {
    return (
        <>
            <section>
                <Navbar />
            </section>
            <section class='Website-Search'>
                <h1 class='Explore-Parks'>Explore Parks</h1>
            </section>
            <section class='Seraching'>
                <SearchBarv2 />
            </section>
            <Footer />
        </>
    )
}

export default SearchPage
