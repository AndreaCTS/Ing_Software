// Sidebar.js
import React from 'react';
import { FaBars, FaArrowLeft, FaRegSquare } from 'react-icons/fa';
import './Sidebarn.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {



  const handleHomeClick = () => {
    // Puedes cambiar '/ruta-deseada' por la ruta a la que deseas redirigir
    window.location.href = '/';
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar}>
        {isOpen ? <FaArrowLeft /> : <FaBars />}
        <span className={isOpen ? 'show-text' : 'hide-text'}>
          {isOpen ? 'Toggle' : ''}
        </span>
      </button>
      <button>
        <FaRegSquare />
        <span className={isOpen ? 'show-text' : 'hide-text'}>
          {isOpen ? 'Filtrar' : ''}
        </span>
      </button>
      <a href="/" onClick={handleHomeClick}>
        <button>
          <FaRegSquare />
          <span className={isOpen ? 'show-text' : 'hide-text'}>
            {isOpen ? 'Home' : ''}
          </span>
        </button>
      </a>
    </div>
  );
};

export default Sidebar;
