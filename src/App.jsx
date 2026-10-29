import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav';
import Home from './components/Home';


const App = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <>
            <Nav theme={theme} setTheme={setTheme} />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
};

export default App;