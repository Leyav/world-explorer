import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../../../redux/reducer/country'; 
import './index.css'; 

const CountryList = () => {
    const dispatch = useDispatch();
    const { countries, status } = useSelector((state) => state.country); 
    const [visible, setVisible] = useState(10);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCountries());
        }
    }, [status, dispatch]);

    const handleLoadMore = () => {
        setVisible((prev) => prev + 10);
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Failed to load countries. Please try again later.</div>;
    }

    return (
        <div className="country-list">
            {countries.slice(0, visible).map((country, index) => (
                <div key={index} className="country-container">
                    <img src={country.flag} alt={country.name} className="country-flag" />
                    <div className="country-details">
                        <span className="country-name">{country.name}</span>
                        <span className="country-region">{country.region}</span>
                    </div>
                </div>
            ))}
            {visible < countries.length && (
                <button className="load-more-btn" onClick={handleLoadMore}>
                    Load More
                </button>
            )}
        </div>
    );
};

export default CountryList;
