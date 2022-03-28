import React from 'react'
import './About.css'
import ME from '../../assets/IMG-1034__1_-removebg-preview.png'
import {FaAward} from 'react-icons/fa'
import {RiTeamFill} from 'react-icons/ri'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className = "about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>2+ years programming</small>
                        </article>

                        <article className='about__card'>
                            <RiTeamFill className="about__icon"/>
                            <h5>Teamates</h5>
                            <small>Worked with 40+ people</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>5 Portfolio Projects</small>
                        </article>
                    </div>

                    <p>
                    I’m Hamed, a 10th-grade student residing in Ontario. 
                    I have a big passion for computer science, especially
                    fields in artificial intelligence and web development.
                    I love learning about different technologies that can 
                    help make the world a better place. In my freetime I like
                    to partcipate in hackathons, make web design dreams come to life,
                    and work on AI projects that can help the world.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About