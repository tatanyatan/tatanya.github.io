import "./School.css";
import React, { useState } from "react";

function Schoolcola() {
    return (
      <div className="App">
        <InfoGroup />
        <Sert />
        <Podpiska />
      </div>
    );
  }

function InfoGroup(){
    return (
      <section className="info-group" >
        <div className="info-content">
          <h2>Обучение</h2>
          <div className="group-description">
            <p className="paragraph">На сайте Astrotips Вы можете получить всестороннее астрологическое образование. Мы предлагаем полный спектр учебных программ для начинающих и опытных астрологов, а также тематические мастер-классы и открытые вебинары.</p>
            <p className="paragraph">Наши программы обучения разработаны по принципу последовательного освоения материала. Если Вы новичок в астрологии, мы предлагаем начать с базовых курсов по натальной, прогностической и синастрической астрологии. Эти знания позволят Вам применять астрологию для самопознания и консультирования.</p>
            <p className="paragraph">Для астрологов, уже имеющих опыт, мы подберем индивидуальную программу обучения, учитывая Ваш уровень подготовки и потребности. Если Вы планируете профессионально использовать астрологию, мы рекомендуем пройти наши базовые программы.
            Дополнительные программы и мастер-классы помогут Вам повысить квалификацию и расширить свои астрологические знания. </p>
            <p className="paragraph"> Astrotips специализируется на онлайн-обучении астрологии. Все занятия проводятся в формате вебинаров и доступны в записи.</p>
            <h1>Дистанционное обучение имеет ряд преимуществ:</h1>
            <p className="paragraph">• Экономия времени: Вы можете учиться из любой точки мира, где есть доступ в интернет.<br />
            • Удобство: Занятия можно просматривать в любое время и неограниченное количество раз.<br />
            • Доступность: Стоимость онлайн-обучения ниже, чем очного, так как не включаются расходы на аренду помещения.<br />
            • Поддержка: Вы можете задавать вопросы преподавателю в чате вебинара.</p>
            <p className="paragraph">Для обучения астрологии не требуется специальных знаний или способностей. Главное - интерес к этой древней науке и готовность учиться и практиковаться.
            Астрология может стать полезным инструментом для людей любого возраста. Молодым людям она поможет найти свое призвание и сформировать жизненные ценности. Старшему поколению она может подарить новые увлечения и профессию.
            Обучение астрологии изменит Вашу жизнь. Вы начнете воспринимать мир по-новому, понимая его целостность и гармонию.</p>
            <h3> Мы с нетерпением ждем Вас в нашем сообществе астрологов!</h3>
          </div>
        </div>
      </section>
    )
  }

function Sert(){
    return(
      <div className="sert">
        <div className="text-sert">
          <h1>По окончанию курса вы получите сертификат</h1>
        </div>
        <div className="image-school">
            <img className="image-schl" src="murzilka.webp" alt=""  />
        </div>
      </div>
    )
}


const Podpiska = () => {
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
    <section className="Rassylka1">
      <h2>Оставьте заявку, мы с вами свяжемся!</h2>
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
          Записаться
        </button>
      </form>

      {/* Модальное окно */}
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalVisible(false)}>
              &times;
            </span>
            <p>Вы успешно заполнили форму! <br /> Наши специалисты свяжутся с вами <br /> в ближайшее время ❤</p>
          </div>
    </div>
  )}
</section>
);
};






export default Schoolcola;