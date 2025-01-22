import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/reducer/country';
import CountrySlider from './components/Slider';
import CountryList from './components/CountryList';
import './index.css';
const Home = () => {
    const dispatch = useDispatch();
    // const { countries, status } = useSelector((state) => state.countries);

   

    return (
        <div className="home-page container-fluid">
            {/* Header Section */}
            <header className="row py-3 border-bottom">
                <div className="col-md-6">
                    <h1 className="text-primary" style={{fontSize:'1.5rem'}}>Countries</h1>
                </div>
                <div className="col-md-6 text-end">
                    <button className="btn btn-outline-primary mx-2">All</button>
                    <button className="btn btn-outline-secondary mx-2">Asia</button>
                    <button className="btn btn-outline-secondary">Europe</button>
                </div>
                <div className='welcome-section'>
                    <div className='welcome-text'>WELCOME</div>
                </div>
            </header>

            {/* Slider Section */}
            <section className="row my-4">
                <div className="col-md-12">
                    <CountrySlider />
                </div>
            </section>

            {/* Country Display Section */}
            <section className="row my-4">
                <CountryList/>
            </section>

            {/* Footer Section */}
            <footer className="row py-4 border-top">
                <div className="col text-center">
                    <div className="d-flex justify-content-center mb-3" style={{ height: '10vh' }}>
                        <a href="#" className="text-secondary mx-3 fs-4"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" className="text-secondary mx-3 fs-4"><i className="fa-brands fa-twitter"></i> </a>
                        <a href="#" className="text-secondary mx-3 fs-4"><i className="fa-brands fa-linkedin"></i> </a>
                        <a href="#" className="text-secondary mx-3 fs-4"> <i className="fa-brands fa-youtube"></i> </a>
                    </div>
                    <p className="text-muted">Copyright © 2025 worldexplorer.com. All rights reserved.</p>
                </div>
            </footer>
        </div>

    );
};

export default Home;
