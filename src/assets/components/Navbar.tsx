import { useState } from "react";
import logo from "../images/Logo.png";
import search from "../images/btn-search.png";

interface NavbarProps {
  onSearch: (query: string) => void; // Definisce il tipo della funzione onSearch
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Impedisce il refresh della pagina
    onSearch(query); // Passa il valore della ricerca al componente padre
    setQuery(""); // Resetta l'input
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <img src={logo} alt="TuneSphere" className="logo" />
        </li>
        <li className="nav-item search-container">
          <form onSubmit={handleSearch}>
            <div className={`search-input ${isFocused ? "focused" : ""}`}>
              <img src={search} alt="search" className="search-icon" />
              <input
                type="search"
                className="input-search"
                placeholder="Cosa vuoi cercare?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
