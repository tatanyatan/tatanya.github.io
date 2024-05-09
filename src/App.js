import './App.css';
import React, { useState } from "react";


function App() {
  return (
    <div className="App">
      <First />
      <Second />
      <Astrology />
      <BlockComponent />
      <Mailing />
    </div>
  );
}


function First() {
  const handleButtonClick = () => {
    const element = document.getElementById('second-block');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Добро пожаловать на сервис астрологических услуг Astrotips</h1>
        <button className="btn" onClick={handleButtonClick}>Узнать больше</button>
      </div>
    </section>
  );
}



function Second(){
  return (
    <div className="container1" id="second-block">
      <h1 className="heading">Раскройте тайны звезд</h1>
      <div className="content">
        <div className="text-block">
          <p>
          Астрология предлагает глубокое понимание личных качеств, жизненного пути и потенциальных возможностей, помогая людям принимать обоснованные решения и вести более осмысленную жизнь.
          </p>
          <p>
          Звезды хранят ключи к вашему жизненному пути. Наша цель - помочь вам разгадать эти секреты и использовать их для достижения ваших целей.
          </p>
          <p>
          Опытные астрологи составят для вас индивидуальный гороскоп, основанный на вашем уникальном положении звезд, чтобы вы могли реализовать свой потенциал и создать жизнь, которой вы достойны.
          </p>
        </div>
        <div className="image-block">
          <img className="image" src="card.webp" alt=""  />
        </div>
      </div>
    </div>
  );
};



function Astrology() {
  return (
    <section className="team-section">
      <h1>Наши опытные астрологи</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="team-member">
              <img src="astr1.webp" alt="" />
              <h3>Алина Тай</h3>
              <span>@alinatarot_</span>
              <p> <br />
              Астролог и таролог, известный своими точными прогнозами и глубоким пониманием астрологии.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <img src="astr2.webp" alt="" />
              <h3>Евгения Лэй</h3>
              <span>@Jen_tarot</span>
              <p> <br />
                Астролог и целитель, объединяющий астрологию с энергетическими практиками для исцеления и трансформации.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <img src="astr3.webp" alt="" />
              <h3>Мария Ива</h3>
              <span>@Mary_moon</span>
              <p> <br />
                Астролог и духовный наставник, использующий астрологию для раскрытия жизненного предназначения и духовного роста.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function BlockComponent () {
  return (
    <div className="block-container">
      <h2 className="block-title">Выберите Свой Знак Зодиака</h2>
      <p className="block-text">Какой у тебя знак? <br /> Читайте Ежедневную рассылку <br /> Гороскоп На Сегодня</p>
      
      <div className="image-row">
        <div className="image-item">
          <img src="Rectangle 16.webp" alt="" />
          <h3>Водолей</h3>
          <p>21 янв - 19 фев</p>
        </div>
        <div className="image-item">
        <img src="Rectangle 17.webp" alt="" />
          <h3>Рыбы</h3>
          <p>20 фев - 20 мар</p>
        </div>
        <div className="image-item">
          <img src="Rectangle 18.webp" alt="" />
          <h3>Овен</h3>
          <p>21 мар - 20 апр</p>
        </div>
        <div className="image-item">
        <img src="Rectangle 19.webp" alt="" />
          <h3>Телец</h3>
          <p>21 апр - 20 мая</p>
        </div>
        <div className="image-item">
          <img src="Rectangle 20.webp" alt="" />
          <h3>Близнецы</h3>
          <p>21 мая - 21 июн</p>
        </div>
        <div className="image-item">
        <img src="Rectangle 21.webp" alt="" />
          <h3>Рак</h3>
          <p>22 июн - 22 июл</p>
        </div>

      </div>
      
      <div className="image-row">
        <div className="image-item">
          <img src="Rectangle 22.webp" alt="" />
          <h3>Лев</h3>
          <p>23 июл - 23 авг</p>
        </div>
        <div className="image-item">
        <img src="Rectangle 23.webp" alt="" />
          <h3>Дева</h3>
          <p>24 авг - 23 сен</p>
        </div>
        <div className="image-item">
          <img src="Rectangle 24.webp" alt="" />
          <h3>Весы</h3>
          <p>24 сен - 23 окт</p>
        </div>
        <div className="image-item">
        <img src="Rectangle 25.webp" alt="" />
          <h3>Скорпион</h3>
          <p>24 окт - 22 ноя</p>
        </div>
        <div className="image-item">
          <img src="Rectangle 26.webp" alt="" />
          <h3>Стрелец</h3>
          <p>23 ноя - 22 дек</p>
        </div>
        <div className="image-item">
        <img src="Rectangle 21.webp" alt="" />
          <h3>Козерог</h3>
          <p>23 дек - 20 янв</p>
        </div>

      </div>
    </div>
  );
}




// Функциональный компонент Mailing
const Mailing = () => {
  // Состояния для имени, электронной почты и видимости модального окна
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [modalVisible, setModalVisible] = useState(false); // Состояние для видимости модального окна

  // Обработчики изменения имени и электронной почты
  const handleNameChange = (e) => {
    setName(e.target.value);
    validateButton();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateButton();
  };

  // Функция для проверки, можно ли включить кнопку
  const validateButton = () => {
    const isValidName = name.length > 0;
    const isValidEmail = email.includes("@") && email.includes(".");
    setIsButtonDisabled(!isValidName || !isValidEmail);
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isButtonDisabled) {
      // Здесь вместо alert вызываем функцию, которая откроет модальное окно
      setModalVisible(true);
    }
  };

  return (
    <section className="Rassylka">
      <h2>Подпишитесь на рассылку</h2>
      <p>
        Вы будете регулярно получать актуальные <br />
        гороскопы для вашего знака зодиака на <br />
        электронную почту. Путешествуйте по своему <br />
        астрологическому пути вместе с нами! <br />
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Электронная почта"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit" disabled={isButtonDisabled}>
          Подписаться
        </button>
      </form>

      {/* Модальное окно */}
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalVisible(false)}>
              &times;
            </span>
            <p>Вы успешно подписались на рассылку!</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default App;

