import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
    return (
        <section id="experience">
            <h5>The Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details-icon'>
                            <BsFillPatchCheckFill className="skill__icon"/>
                            <div>
                                <h4>HTML5</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                   
                        <article className='experience__details-icon'>
                            <BsFillPatchCheckFill className="skill__icon"/>
                            <div>
                                <h4>CSS3</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details-icon'>
                            <BsFillPatchCheckFill className="skill__icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details-icon'>
                            <BsFillPatchCheckFill className="skill__icon"/>
                            <div>
                                <h4>React.js</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        
                    </div>
                </div>

                {/*============== Exxperience for ML & DS =======================*/}
                
                <div className="experience__mlds">
                    <h3>Machine Learning & Data Science</h3>
                    <div className='experience__content'>
                        <article className='experience__details-icon'>
                            <BsFillPatchCheckFill className="skill__icon"/>
                            <div>
                                <h4>Numpy</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                 
                        <article className='experience__details-icon'>
                            <BsFillPatchCheckFill className="skill__icon"/>
                            <div>
                                <h4>Pandas</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                
                        <article className='experience__details-icon'>
                            <BsFillPatchCheckFill className="skill__icon"/>
                            <div>
                                <h4>Tensorflow</h4>
                                <small className='text-light'>In Progress</small>
                            </div>
                        </article>
                 
                        <article className='experience__details-icon'>
                            <BsFillPatchCheckFill className="skill__icon"/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details-icon'>
                            <BsFillPatchCheckFill className="skill__icon"/>
                            <div>
                                <h4>C++</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>

                        <article className='experience__details-icon'>
                            <BsFillPatchCheckFill className="skill__icon"/>
                            <div>
                                <h4>Sklearn</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience