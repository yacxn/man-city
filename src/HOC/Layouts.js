import React from 'react';
import Header from '../Components/Header_footer/Header';
import Footer from '../Components/Header_footer/Footer';
const Layouts = (props) => {
    return (
        <div>
            <Header />
            {props.children}
           <Footer/>
        </div>
    );
}

export default Layouts;
