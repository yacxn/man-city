import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import {CityLogo} from '../ui/icons'
class Header extends Component {
    render() {
        return (
            <AppBar
            position="fixed"
            style={{
                backgroundColor:'#98c5e9',
                boxShadow:'none',
                padding:'10 px 0',
                borderBottom:'2px solid #00285e'
            }}
            >
            <ToolBar
            style={{
                display:'flex',
            }}
            >
                <div style={{flexGrow:1}}>
                    <div className="Header_logo">
                        <CityLogo
                        Link={true}
                        LinkTo="/"
                        width="70px"
                        height="70px"
                        
                        />
                    </div>
                </div>
            <Link to="/the_team">
                <Button color="inherit">
                    The Team
                </Button>
            </Link>
            <Link to="/the_matches">
                <Button color="inherit">
                    Matches
                </Button>
            </Link>
            </ToolBar>

            </AppBar>
        );
    }
}

export default Header;
