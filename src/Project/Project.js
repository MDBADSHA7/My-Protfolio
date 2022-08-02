import React from 'react';
import project from '../../src/PP-1.PNG'
import project1 from '../../src/PPP-2.PNG'
import project2 from '../../src/PP-3.PNG'
import './Project.css'
const Project = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5'>
            <h2 className='heading'>Hear is my some Project</h2>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={project1} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">This is my Personal Website.I made this website for calculation my income,saving and cost.</h2>
                    <br />
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Project Details</button>
                        <br />
                        <button class="btn bg-gradient-to-r from-purple-500 to-pink-500"><a target="_blank" href="https://objective-panini-55d182.netlify.app/">Live Website Link</a></button>
                        <br />
                        <button class="btn bg-gradient-to-r from-purple-500 to-pink-500"><a target="_blank" href="https://github.com/Porgramming-Hero-web-course/money-master-MDBADSHA7">Github Code Link</a></button>
                    </div>
                </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={project} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">This is my front-end responsive website.I use HTML,Raw CSS and Bootstrap for make this website.</h2>
                    <br />
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Project Details</button>
                        <br />
                        <button class="btn bg-gradient-to-r from-purple-500 to-pink-500"><a target="_blank" href="https://mdbadsha7.github.io/assignment-two/">Live Website Link</a></button>
                        <br />
                        <button class="btn bg-gradient-to-r from-purple-500 to-pink-500"><a target="_blank" href="https://github.com/Porgramming-Hero-web-course/convention-center-MDBADSHA7">Github Code Link</a></button>
                    </div>
                </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={project2} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">This is my Laptop wharehouse website.This is my 1st Full stack website.I used Nodejs for my serversite.This is my one of the best full-stack website.</h2>
                    <br />
                    <div class="card-actions justify-middle">
                        <button class="btn btn-primary">Project Details</button>
                        <br />
                        <button class="btn bg-gradient-to-r from-purple-500 to-pink-500"><a target="_blank" href="https://laptop-werehouse-website.web.app/">Live Website Link</a></button>
                        <br />
                        <button class="btn bg-gradient-to-r from-purple-500 to-pink-500"><a target="_blank" href="https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-MDBADSHA7">Client Github Code Link</a></button>
                        <br />
                        <button class="btn bg-gradient-to-r from-purple-500 to-pink-500"><a target="_blank" href="https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-MDBADSHA7">Server Github Code Link</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;