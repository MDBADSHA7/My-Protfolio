import React from 'react';
import './MySkill.css'
const MySkill = () => {
    return (
        <div>
            <h1 className='Skill'>My Skill</h1>
            <div className='progressbar grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                <div>
                    <p>HTML</p>
                    <progress class="progress progress-success w-56" value="90" max="100"></progress>
                    < br />
                    <p>Raw CSS</p>
                    <progress class="progress progress-success w-56" value="95" max="100"></progress>
                    <br />
                    <p>Bootstrap</p>
                    <progress class="progress progress-success w-56" value="70" max="100"></progress>
                    <br />
                    <p>Tailwind</p>
                    <progress class="progress progress-success w-56" value="75" max="100"></progress>
                    <br />
                    <p>JavaScript</p>
                    <progress class="progress progress-success w-56" value="55" max="100"></progress>
                    <br />
                    <p>ES6</p>
                    <progress class="progress progress-success w-56" value="65" max="100"></progress>
                    <br />
                    <p>Font Awesome Icon</p>
                    <progress class="progress progress-success w-56" value="85" max="100"></progress>
                </div >
                <div>
                    <p>React</p>
                    <progress class="progress progress-success w-56" value="78" max="100"></progress>
                    <br />
                    <p>React Route</p>
                    <progress class="progress progress-success w-56" value="95" max="100"></progress>
                    <br />
                    <p>React hooks</p>
                    <progress class="progress progress-success w-56" value="70" max="100"></progress>
                    <br />
                    <p>Firebase Authentication</p>
                    <progress class="progress progress-success w-56" value="85" max="100"></progress>
                    <br />
                    <p>Node.js</p>
                    <progress class="progress progress-success w-56" value="70" max="100"></progress>
                    <br />
                    <p>Mongodb</p>
                    <progress class="progress progress-success w-56" value="75" max="100"></progress>
                    <p>Hero Icon</p>
                    <progress class="progress progress-success w-56" value="85" max="100"></progress>
                </div>
            </div >
        </div >
    );
};
export default MySkill;