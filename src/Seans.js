import './Seans.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Astroseans() {
  return (
    <div className="App">
      <Astroseans6 />
    </div>
  );
}


function Astroseans6() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedServicePrice, setSelectedServicePrice] = useState(0);

  const openModal = (service, price) => {
    setSelectedService(service);
    setSelectedServicePrice(price);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openConfirmationModal = () => {
    setIsConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (!isValidEmail(email)) {
      alert('Пожалуйста, введите корректный адрес электронной почты');
      return;
    }
    // После успешной обработки вызываем функцию открытия нового модального окна
    openConfirmationModal();
    // Также закрываем предыдущее модальное окно
    closeModal();
  };

  const isValidEmail = (email) => {
    // Регулярное выражение для проверки формата email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className='tovarnyblock'>
      <h1>Выберите услугу</h1>
      <div className="tovary">
        <div className="tovar">
          <h2>Таро-консультация<br /><br /></h2>
          <p>Анализ положения планет, знаков и домов в вашей карте рождения</p>
          <p>Глубокое понимание ваших сильных и слабых сторон</p>
          <p>Персональные рекомендации по развитию и росту</p>
          <h2>Цена: 1000 рублей/1,5 часа</h2>
          <button onClick={() => openModal('Таро-консультация', 1000)}>Записаться на прием</button>
        </div>
        <div className="tovar">
          <h2>Полный разбор натальной карты</h2>
          <p>Анализ положения планет, знаков и домов в вашей карте рождения</p>
          <p>Глубокое понимание ваших сильных и слабых сторон</p>
          <p>Персональные рекомендации по развитию и росту</p>
          <h2>Цена: 2500 рублей/1,5 часа</h2>
          <button onClick={() => openModal('Полный разбор натальной карты', 2500)}>Записаться на прием</button>
        </div>
        <div className="tovar">
          <h2>Составление личного гороскопа</h2>
          <p>Прогноз на предстоящий год, основанный на движении планет</p>
          <p>Информация о благоприятных и сложных периодах</p>
          <p>Советы по использованию космических энергий для достижения целей</p>
          <h2>Цена: 1500 рублей/1,5 часа</h2>
          <button onClick={() => openModal('Составление личного гороскопа', 1500)}>Записаться на прием</button>
        </div>
      </div>

      {/* Первое модальное окно */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h1 className="modal-title">Подтверждение записи</h1>
            <p>Выбранная услуга: {selectedService}</p>
            <p>Цена: {selectedServicePrice} рублей/1,5 часа</p>
            <p>Введите данные для записи:</p>
            <input type="text" placeholder="Имя" value={name} onChange={handleNameChange} className="input-field" />
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} className="input-field" />
            <button onClick={handleSubmit} disabled={!name || !email}>Подтвердить запись</button>
          </div>
        </div>
      )}

      {/* Второе модальное окно */}
      {isConfirmationModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeConfirmationModal}>&times;</span>
            <h1 className="modal-title" >Благодарим за запись на астрологический прием!</h1>
            <p>Подробная информация и ссылка на оплату услуги  <br /> уже отправлены на вашу почту: <br /> {email}</p>
            <Link to="/">
              <button onClick={() => { setIsConfirmationModalOpen(false); setIsModalOpen(false); }}>Вернуться на главную страницу</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
  
export default Astroseans;


