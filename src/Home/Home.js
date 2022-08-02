import React from 'react';
import image from '../../src/ppPRO.png'
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import MySkill from '../MySkill/MySkill';
import Project from '../Project/Project';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-orange-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="avatar">
                        <div class="w-56 rounded-full ring ring-primary ring-offset-base-500 ring-offset-1">
                            {<img src={image} alt='' />}
                        </div>
                    </div>
                    <div>
                        <h1 class="text-5xl font-bold">Hi, I'm MD BADSHA</h1>
                        <p class="py-6"><span className='developer'>Junior Front-end Web Developer </span></p>
                        <a target="_blank" class="btn bg-gradient-to-r from-fuchsia-500 to-violet-500" href="https://www.linkedin.com/in/md-badsha-6a8668241/">Hire Me</a>
                    </div>
                </div>
            </div>
            <About></About>
            <MySkill></MySkill>
            {<Project></Project>}
            <Contact></Contact>
            <Footer></Footer>
        </div>

    );
};

export default Home;