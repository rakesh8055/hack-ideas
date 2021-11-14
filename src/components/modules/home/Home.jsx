import React from 'react';
import HomePageImg from '../../../images/home-page-img.jpeg';
import './Home.styles.scss';

const Home = () => (
    <div className="container home-section" id="home-section">
        <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center'>
            <div className='app-title d-none d-sm-none d-md-block'>
                <h2 data-testid='header'>Hack Ideas</h2>
            </div>
            <div className='app-image'>
                <img src={HomePageImg} alt='HomePage'/>
            </div>
        </div>
    </div>
)

export default Home;