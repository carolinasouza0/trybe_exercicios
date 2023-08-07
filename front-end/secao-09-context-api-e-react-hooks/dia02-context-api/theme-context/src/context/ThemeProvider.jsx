import { useState } from 'react';
import ThemeContext from './ThemeContext';
import PropTypes from 'prop-types';

export default function ThemeProvider ({ children }) {
    const [theme, setTheme] = useState('dark');

    function toggleTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={{ color: theme, toggleTheme }}>
            <div className={ theme }>
                { children }
            </div>
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
