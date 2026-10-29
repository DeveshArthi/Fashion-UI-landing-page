import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Nav = ({ theme, setTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);


    const toggleTheme = () => {
        setTheme((prev) => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="nav_wrapper">
            <div className="container">
                <nav>
                    <Link to="/" className="nav_logo" onClick={closeMenu}>
                        <h2>DANI Bee</h2>
                    </Link>
                    <div className='nav_actions'>
                        <ul
                            id="nav-items"
                            className={`nav_items ${isOpen ? 'open' : ''}`}
                        >
                            <li><Link to="/" onClick={closeMenu}>Collections</Link></li>
                            <li><Link to="#" onClick={closeMenu}>New Arrivals</Link></li>
                            <li><a href="#" onClick={closeMenu}>Beauty Combo's</a></li>
                            <li><Link to="#" onClick={closeMenu}>Bath & Body</Link></li>
                        </ul>


                    </div>

                    <div className="nav_controls">
                        <div id="nav_icon"
                           className={`nav_icon ${isOpen ? 'open' : ''}`}>
                            <PersonIcon />
                            <SearchIcon />
                            <FavoriteIcon />
                            <ShoppingCartIcon />
                        </div>
                        <button
                            type="button"
                            className="theme_toggle"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                        >
                            {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                        </button>

                        <button
                            type="button"
                            className="menu_icon"
                            onClick={() => setIsOpen((current) => !current)}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}
                            aria-controls="nav-items"
                        >
                            {isOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;