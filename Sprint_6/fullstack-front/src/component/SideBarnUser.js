// Sidebar.js
import React from 'react';
import { FaBars, FaArrowLeft, FaRegSquare } from 'react-icons/fa';
import '../styles/Sidebarn.css';

const SidebarnUser = ({ isOpen, toggleSidebar }) => {



  const handleHomeClick = () => {
    // Puedes cambiar '/ruta-deseada' por la ruta a la que deseas redirigir
    window.location.href = '/';
  };

  const handleReport = () => {
    // Puedes cambiar '/ruta-deseada' por la ruta a la que deseas redirigir
    window.location.href = '/addreport';
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar}>
        {isOpen ? <FaArrowLeft /> : <FaBars />}
        <span className={isOpen ? 'show-text' : 'hide-text'}>
          {isOpen ? '' : ''}
        </span>
      </button>
      <a href="/addreport" onClick={handleReport}>
      <button>
        <FaRegSquare />
        <span className={isOpen ? 'show-text' : 'hide-text'}>
          {isOpen ? 'Reportar' : ''}
        </span>
      </button>
      </a>
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

export default SidebarnUser;
