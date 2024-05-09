import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const links = [
  { text: 'Главная', url: '/' },
  { text: 'Услуги астролога', url: '/astroseans' },
  { text: 'Обучение', url: '/school' },
  { text: 'Блог', url: '/blog' },
  { text: 'О Нас', url: '/about' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Добавляем состояние для открытия/закрытия меню

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Изменяем состояние при нажатии на кнопку гамбургера
  };

  const linksJsx = links.map((link) => (
    <li key={link.text}>
      <Link to={link.url} onClick={() => setIsOpen(false)}>{link.text}</Link>
    </li>
  ));

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="./logo.webp" alt=" " width={137} />
        </Link>
      </div>
      {/* Добавляем кнопку гамбургера и контейнер для меню */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="hamburger-icon"></div>
      </div>
      {/* Добавляем класс для адаптивного меню */}
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>{linksJsx}</ul>
      </nav>
    </header>
  );
}

export default Header;




