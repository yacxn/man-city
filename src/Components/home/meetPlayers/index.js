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
                            <div>
                                <Tag
                                    bck="#0e1731"
                                    size="100px"
                                    color="#ffffff"
                                    add={{
                                        marginBottom: '20px',
                                        display:'inline-block',
                                    }}
                                >
                                    Meet
                                </Tag>
                            </div>
                              <div>
                                <Tag
                                    bck="#0e1731"
                                    size="100px"
                                    color="#ffffff"
                                    add={{
                                        display:'inline-block',
                                        marginBottom:'20px',
                                    }}
                                >
                                    The
                                </Tag>
                            </div>
                              <div>
                                <Tag
                                    bck="#0e1731"
                                    size="100px"
                                    color="#ffffff"
                                    add={{
                                        display:'inline-block',
                                        marginBottom: '20px',
                                    }}
                                >
                                    Players
                                </Tag>
                            </div>
                             <div>
                                <Tag
                                    bck="#ffffff"
                                    size="27px"
                                    color="#0e1731"
                                    link={true}
                                    linkto="/the_team"
                                    add={{
                                        marginBottom: '20px',
                                        display:'inline-block',
                                        border:'1px solid #0e1731'
                                    }}
                                >
                                    Meet
                                </Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MeetPlayers;
