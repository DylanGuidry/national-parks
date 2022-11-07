import react from "react"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import './About.scss'
import Portait from '../Images/Portait.jpg'

const About = () => {
return (
    <div>
        <Navbar/>
            <div class='overall-container'>
                <div class='about-us-container'>
                    <div><img class='Portrait fadeInUp animate one' src={Portait}/></div>
                </div>
                <div class='about-us-des fadeInUp animate one'>
                    <div>
                        <h1 class ='meeting-the-dev'>MEETING THE DEVELOPER</h1>
                    </div>
                    <div class='all-about-dev'>
                        Dylan Guidry holds a Software Engineering Certification from DigitalCrafts. Since 2022, he has worked as a teaching assistant for DigitalCrafts, a full-stack coding bootcamp.
                        As a graduate student, Dylan has worked on multiple projects such as an E-Commerce site named Oakbear, a Pokedex, and a National Parks Website.
                    </div>
                    <div class='link-box'>
                        <div class='Linked-ones'>
                            <a href="https://github.com/DylanGuidry">GitHub</a>
                        </div>
                        <div class='Linked-ones'>
                        <a href="https://www.dylanguidry.dev/">Portfolia</a>
                        </div>
                        <div class='Linked-ones'    >
                        <a href="https://www.linkedin.com/in/dylan-guidry-853336215/">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
)
}

export default About