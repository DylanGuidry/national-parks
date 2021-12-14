import React, { Component } from 'react'
import './Navbar.scss'
import Mountain from '../Images/mountains.png'

export class Navbar extends Component {
    render() {
        return (
            <section class='Section1'>
                <section class='NavBar'>
                    <h1 class='Title-Name'><img class='Mountain-Image' src={Mountain}/>PRESERVE PROJECT</h1>
                    <ul class='Directories'>
                        <li><a href='/'>Home</a></li>
                        <li>About</li>
                        <li><a href='/explore'>Explore</a></li>
                    </ul>
                </section>
            </section>
        )
    }
}

export default Navbar