import  React from 'react';
import { Link } from 'react-router-dom';

import manchester_city_logo from '../../Resources/images/logos/manchester_city_logo.png';

export const CityLogo = (props) => {
    const template = <div className="img_cover" style={{
        width:props.width,
        height:props.height,
        background: `url(${manchester_city_logo}) no-repeat`
    }}></div>

    if (props.Link){
        return (
            <Link to={props.LinkTo} className="link_logo">
            {template}
            </Link>
        )
    }else {
        return template
    }
}