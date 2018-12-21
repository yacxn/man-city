import React, { Component } from 'react'
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import featuredPlayer from "../../../Resources/images/featured_player.png";
export default class Texte extends Component {
    animateNumber = () => (
        <Animate
        show={true}
        start={
            {
                opacity:0,
                rotate:0
            }
        }
        enter={
            {
                opacity: [1],
                rotate: [360],
                timing:{duration:1000,ease:easePolyOut}
            }
        }
        >
            {({opacity,rotate})=>{
                return (<div className="featured_number" style={{
                    opacity,
                    transform: `translate(260px,120px) rotatex(${rotate}deg )`
                }}>
                  3
                </div>)
            }}
        </Animate>
    )
    animateFirst = () => (
        <Animate
        show={true}
        start={
            {
                opacity:0,
                x:502,
                y:405
                
            }
        }
        enter={
            {
                opacity: [1],
                x: [273],
                y: [405],
                timing:{delay:300, duration:500,ease:easePolyOut}
            }
        }
        >
            {({opacity,x,y})=>{
                return (
            <div className="featured_first" 
                style={{
                    opacity,
                    transform: `translate(${x}px,${y}px)`
                }}>
                  League
                </div>)
            }}
        </Animate>
    )
    
        animateSecond = () => (
            <Animate
        show={true}
        start={
            {
                opacity:0,
                x:502,
                y:540
                
            }
        }
        enter={
            {
                opacity: [1],
                x: [273],
                y: [540],
                timing:{duration:500,ease:easePolyOut}
            }
        }
        >
            {({opacity,x,y})=>{
                return (
            <div className="featured_second" 
                style={{
                    opacity,
                    transform: `translate(${x}px,${y}px)`
                }}>
                  Championships
                </div>)
            }}
        </Animate>
        )

    animatePlayer = () => (
        <Animate
            show={true}
            start={
                {
                    opacity: 0,

                }
            }
            enter={
                {
                    opacity: [1],
                    timing: { delay:800,duration: 500, ease: easePolyOut }
                }
            }
        >
            {({ opacity }) => {
                return (
                    <div className="featured_player"
                        style={{
                            opacity,
                            background:`url(${featuredPlayer})`,
                            transform: `translate(550px,120px)`
                        }}>
                        
                </div>)
            }}
        </Animate>
    )

  render() {
    return (
      <div className="featured_text">
        {this.animatePlayer()}
        {this.animateNumber()}
        {this.animateFirst()}
        {this.animateSecond()}
      </div>
    )
  }
}
