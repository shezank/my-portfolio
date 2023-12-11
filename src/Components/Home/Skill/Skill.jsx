import React from 'react';
import reactLogo from '../../../assets/reactjs.png'

const Skill = () => {
    return (
        <div id='skill'>
            <h1 className='text-4xl font-bold text-center'>Skills</h1>

            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className=''>
                    <img className='h-32' src={reactLogo} alt="" />
                    <p className='text-3xl font-semibold'>React JS</p>
                </div>
            </div>

        </div>
    );
};

export default Skill;