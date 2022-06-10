import React from 'react';
import image from '../../src/131692351_1365374810482039_8592008014066332892_n.jpg'
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-red-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="avatar">
                        <div class="w-56 rounded-full ring ring-primary ring-offset-base-500 ring-offset-1">
                            <img src={image} alt='' />
                        </div>
                    </div>
                    <div>
                        <h1 class="text-5xl font-bold">Hi, I'm MD BADSHA!</h1>
                        <p class="py-6">Full stack junior web developer </p>
                        <button class="btn btn-primary">Hire Me</button>
                    </div>
                </div>
            </div>
            {/* <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                <div class="">
                    <img src={image} height="550" alt='' />
                </div>
            </section> */}
            <Footer></Footer>
        </div>

    );
};

export default Home;