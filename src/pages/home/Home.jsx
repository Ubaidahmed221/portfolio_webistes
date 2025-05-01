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
                I am  web developer focused on building powerful, data-driven digital experiences.
                 With a strong foundation in backend development, I create reliable and scalable solutions tailored 
                 to real-world needs. I’m also passionate about crafting smooth, user-friendly interfaces that bring 
                 everything together.
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
