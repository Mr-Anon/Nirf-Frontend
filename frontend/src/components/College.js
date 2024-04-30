import React from 'react'
// import Header from './Header.js';
// import Content from './Content.js';
// import Footer from './Footer.js';
import { useParams } from 'react-router-dom';



const College = () => {
    const { name } = useParams();

    return ( 
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            fontFamily: 'LOGO'
        }}>
            {name}
        </div>
    );
}
export default College 