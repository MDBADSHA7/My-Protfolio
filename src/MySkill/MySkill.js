import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import './MySkill.css'
const MySkill = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((counter) => counter + 1);
        }, 100000);
        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
        <div>
            <h1 className='Skill'>My Skill</h1>
            <div className='progressbar grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                <div>
                    <p>HTML : <CountUp
                        duration={10} start={0} end={90} />%</p>
                    <progress class="progress progress-success w-56" value="90" max="100">
                    </progress>
                    < br />
                    <p>Raw CSS : <CountUp
                        duration={10} start={0} end={95} />%</p>
                    <progress class="progress progress-success w-56" value="95" max="100"></progress>
                    <br />
                    <p>Bootstrap : <CountUp
                        duration={10} start={0} end={70} />%</p>
                    <progress class="progress progress-success w-56" value="70" max="100"></progress>
                    <br />
                    <p>Tailwind : <CountUp
                        duration={10} start={0} end={75} />%</p>
                    <progress class="progress progress-success w-56" value="75" max="100"></progress>
                    <br />
                    <p>JavaScript : <CountUp
                        duration={10} start={0} end={55} />%</p>
                    <progress class="progress progress-success w-56" value="55" max="100"></progress>
                    <br />
                    <p>ES6 : <CountUp
                        duration={10} start={0} end={65} />%</p>
                    <progress class="progress progress-success w-56" value="65" max="100"></progress>
                    <br />
                    <p>Font Awesome Icon : <CountUp
                        duration={10} start={0} end={85} />%</p>
                    <progress class="progress progress-success w-56" value="85" max="100"></progress>
                </div >
                <div>
                    <p>React : <CountUp
                        duration={10} start={0} end={78} />%</p>
                    <progress class="progress progress-success w-56" value="78" max="100"></progress>
                    <br />
                    <p>React Route : <CountUp
                        duration={10} start={0} end={95} />%</p>
                    <progress class="progress progress-success w-56" value="95" max="100"></progress>
                    <br />
                    <p>React hooks : <CountUp
                        duration={10} start={0} end={70} />%</p>
                    <progress class="progress progress-success w-56" value="70" max="100"></progress>
                    <br />
                    <p>Firebase Authentication : <CountUp
                        duration={10} start={0} end={85} />%</p>
                    <progress class="progress progress-success w-56" value="85" max="100"></progress>
                    <br />
                    <p>Node.js : <CountUp
                        duration={10} start={0} end={70} />%</p>
                    <progress class="progress progress-success w-56" value="70" max="100"></progress>
                    <br />
                    <p>Mongodb : <CountUp
                        duration={10} start={0} end={75} />%</p>
                    <progress class="progress progress-success w-56" value="75" max="100"></progress>
                    <p>Hero Icon : <CountUp
                        duration={10
                        } start={0} end={85} />%</p>
                    <progress class="progress progress-success w-56" value="85" max="100"></progress>
                </div>
            </div >
        </div >
    );
};
export default MySkill;