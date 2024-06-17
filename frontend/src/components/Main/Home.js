import React, { useEffect, useState } from "react";
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import AddCutoffs from './AddCutoffs.js';


const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}>
            <Header onOpenModal={handleOpenModal} />
            <AddCutoffs show={showModal} onClose={handleCloseModal}/>
            <Content />
            <Footer />
        </div>
    );
}
export default Home 