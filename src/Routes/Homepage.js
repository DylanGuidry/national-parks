import React from 'react'
import Navbar from '../Components/Navbar';
import '../Routes/Homepage.scss';
import Yosemite from '../Images/Yosemite-min.jpg';
import Yellowstone from '../Images/Yellowstone-min.jpg';
import Arches from '../Images/Arches-min.jpg';
import Footer from '../Components/Footer.js';

export const Homepage = () => {
    return (
        <section class='Website'>
            <section>
                <Navbar/>
            </section>
            <section class='Content'>
                <section >
                    <section>
                    <h1 class='Container-See fadeInUp animate one'>SEE THE COUNTRY</h1>
                        <h1 class='Headline fadeInUp animate one'>Escape And Breath <br/
                        >The Air On New Mountains.
                        </h1>
                    </section>
                    <section>
                        <button class='Button-Explore fadeInUp animate one'>
                            <span><a class='text-in-button' href='/explore'>Explore Parks</a></span>
                            </button>
                    </section>
                    <section>
                        <h2 class='Bryce-Canyon'>Bryce Canyon National Park</h2>
                    </section> 
                </section>
                    <section class='Overall-Images'>
                        <button class='Image-Card'>
                            <img class='Images' src={Yosemite}></img>
                            <section class='top-right'>Yosemite National Park</section>
                        </button>
                        <button class='Image-Card'>
                            <img class='Images' src={Yellowstone}></img>
                            <section class='top-right-yellow'>Yellowstone National Park</section>
                        </button>
                        <button class='Image-Card'>
                            <img class='Images' src={Arches}></img>
                            <section class='top-right-arches'>Arches National Park</section>
                        </button>
                    </section>
            </section>
            <Footer/>
        </section>
    )
}

export default Homepage
