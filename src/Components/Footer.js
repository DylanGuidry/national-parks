import React from 'react'
import './Footer.scss'
import Mountain from '../Images/mountains.png'

const Footer = () => {
    return (    
    <footer>
        <section class="container">
            <section class="row">
                <section class="col-md-4 col-sm-6 col-xs-12">
                <h1 class='Title-Name'><img class='Mountain-Image' src={Mountain}/>PRESERVE PROJECT</h1>
                </section>
                <h2 class='Copy'>Copyright &copy; 2021</h2>
            <section>
                <h1>Website Created By <a class='Portfolio-Link' href='https://dylanguidry.netlify.app/'>Dylan Guidry</a></h1>
            </section>
            </section>
        </section>
    </footer>
    )
}

export default Footer
