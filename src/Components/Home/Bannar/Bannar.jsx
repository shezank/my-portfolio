import React from 'react';
import shezan from '../../../assets/developer.svg'
import { Fade, Slide } from 'react-awesome-reveal';
const Bannar = () => {
    return (
        
            <div className="px-5 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-20 lg:py-10">
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl lg:py-10">
                            <Slide direction='down'>
                                <h2 className="font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                                    Hello, I'm
                                    <br />

                                    <span className="inline-block text-deep-purple-accent-400  lg:my-3" >Md Farhan Kabir Khan (Shezan)</span>
                                </h2>
                            </Slide>
                            <Fade className="text-gray-700 text-sm md:text-lg" delay={1e3} cascade damping={1e-1} >
                                React Front-End Developer, I will Build Your Website with ReactJs.
                            </Fade>
                        </div>
                        <div className="flex items-center justify-center mt-5 lg:mt-0 lg:justify-start lg:items-start  space-x-3">
                            <button className='btn btn-accent'>About Me</button>
                            <button className='btn btn-accent'>Download CV</button>
                        </div>
                    </div>
                    <div className="lg:flex hidden items-center sm:justify-center lg:items-start lg:w-1/2">
                        <img src={shezan} alt="" />
                    </div>
                </div>

            </div>

        
    );
};

export default Bannar;