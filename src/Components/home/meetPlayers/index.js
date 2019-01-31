import React, { Component } from 'react';
import Stripe from '../../../Resources/images/stripes.png';
import {Tag} from '../../ui/misc';
import Reveal from 'react-reveal/Reveal';
import HomeCards from './cards';

class MeetPlayers extends Component {

    state = {
        show:false
    }

    render() {
        return (
            <Reveal
                fraction={0.7}
                onReveal={()=>{
                    this.setState({
                        show:true
                    })
                }}
            >
                <div className="home_meetplayers" style={{background:`#ffffff url(${Stripe})`}}>
                <div className="container">
                    <div className = "home_meetplayers_wrapper">
                        <div className = "home_card_wrapper">
                            <HomeCards
                                show={this.state.show}
                            />
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
                                        marginTop: '20px',
                                        marginBottom: '20px',
                                        display:'inline-block',
                                        border:'1px solid #0e1731'
                                    }}
                                >
                                    Meet The Here
                                </Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Reveal>
        );
    }
}

export default MeetPlayers;
