import React from 'react';
import Bannar from '../Bannar/Bannar';
import Skill from '../Skill/Skill';
import Projects from '../Projects/Projects';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
        </div>
    );
};

export default Home;