import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Loginpage';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />        
        </Routes>
    </Router>
);

export default App;
