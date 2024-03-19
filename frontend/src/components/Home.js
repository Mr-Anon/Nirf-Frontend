import React from 'react'
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';


const Home = () => {
    return ( 
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}>
            <Header />
            <Content/>
            <Footer/>
        </div>
    );
}
export default Home 