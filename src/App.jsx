import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'; 
import Login from './components/Loginpage';
import Home from './components/HomePage';

const App = () => (
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    </Provider>
);

export default App;
