import React from 'react';
import Featured from './featured';
import Matches from './matches';
import MeetPlayers from './meetPlayers';
const Home = () => {
    return ( 
    <div className="bck_blue" >
        <Featured />
        <Matches />
        <MeetPlayers />
    </div>
    );
};
export default Home;