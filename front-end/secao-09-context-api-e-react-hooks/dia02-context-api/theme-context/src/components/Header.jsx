import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Header() {
    const theme = useContext(ThemeContext);
  return (
    <header>
      <h1>Dark/Light mode with context API</h1>
      <button onClick={() => theme.toggleTheme()}>
        {theme.color === 'dark' ? 'Light mode' : 'Dark mode' }
      </button>
    </header>
  );
}

export default Header;