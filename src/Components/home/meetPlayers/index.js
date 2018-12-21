import React, { Component } from 'react';
import Stripe from '../../../Resources/images/stripes.png';
import {Tag} from '../../ui/misc'

class MeetPlayers extends Component {
    render() {
        return (
            <div className="home_meetplayers" style={{background:`#ffffff url(${Stripe})`}}>
                <div className="container">
                    <div className = "home_meetplayers_wrapper">
                        <div className = "home_card_wrapper">
                            card
                        </div>
                        <div className="home_text_wrapper">
                            text
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MeetPlayers;
