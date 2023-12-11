import React from 'react';
import Bannar from '../Bannar/Bannar';
import Skill from '../Skill/Skill';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Skill></Skill>
            <Projects></Projects>
        </div>
    );
};

export default Home;