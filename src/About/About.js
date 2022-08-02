import React from 'react';
import image from '../../src/hand-drawn-web-developers_23-2148819604.webp'
import './About.css'
const About = () => {
    return (
        <div className='Title'>
            < section class="hero container max-w-screen-lg mx-auto text-center pb-10" >
                <div class="">
                    <img src={image} height="550" alt='' />
                </div>
            </section >
            <div className='about'>
                <h1 className="text-5xl font-bold"><span className='aboutme'>About Me</span></h1>
                <h1>I'm MD BADSHA.I'm Frontend Web Developer.I always try my best to improve my programming skill.I did more than 20 frontend projects.I can make also Full stack project but not good.I made 3 full stack project.In future I want to be a good Full stack web developer.In a word i want to tell, my hope i will be a world best web developer.</h1>
            </div>
        </div >
    );
};

export default About;