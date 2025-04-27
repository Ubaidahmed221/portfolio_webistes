import React from 'react'
import Profile from '../../assets/home.jpg';
import {Link } from 'react-router';
import { RiArrowRightLine } from "react-icons/ri";
import './home.css';


function Home() {
    return (
        <section className='home-container grid' >
            <img src={Profile} alt="" className="home-img" />

            <div className="home-content">
                <h1 className="home-title"><span> I'm Ubaid Ahmed </span> <br /> Web Developer</h1>

                <p className="home-decription">
                I am a Tunisian based web designer & front-end developer focused on 
                crafting clean & user-friendly experiences, I am passionate about building 
                excellent software that improves the lives of those around me.
                </p>

                <Link to={'/about'} className='button' >More About Me
                <span className="button-icon">
                <RiArrowRightLine />
                </span>
                </Link>
            </div>

            <div className="color-block"></div>

        </section>
    )
}

export default Home
