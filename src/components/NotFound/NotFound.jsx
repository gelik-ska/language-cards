// src/components/NotFound/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import notFoundImage from '/Users/Linochka/Desktop/my-language-cards/src/assets/404.png'; // путь к изображению 404

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notFoundImage} alt="404 Not Found" className="not-found-image" />
      <h1>Страница не найдена</h1>
      <p>Извините, но страница, которую вы ищете, не существует.</p>
      <Link to="/" className="back-home">Вернуться на главную</Link>
    </div>
  );
};

export default NotFound;
