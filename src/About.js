import React from 'react';
import "./About.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';



function Aboutmeme() {
  return (
    <div className="App">
      <Onas />
      <Second />
      <SimpleSlider />
    </div>
  );
}

function Onas() {
  return (
    <section className="about">
        <h1>О нас</h1>
        <div className="text-blockkk">
          <p>
            Мы помогаем раскрыть тайны зодиака и обрести гармонию. Наша команда опытных астрологов поддержит вас на пути познания астрологии.
          </p>
          <p>
            Мы ценим наших пользователей и стремимся сделать знакомство с астрологией вдохновляющим. Наша миссия - помочь вам понять свой путь и принимать решения, основанные на знаниях и интуиции.
          </p>
          <p>
            С годами опыта мы предлагаем лучшие услуги астрологических консультаций. Мы гордимся тем, что можем быть вашими проводниками в мире астрологии и духовного роста.
          </p>
          <p>
            Доверьтесь нам, и мы сделаем ваше путешествие по звездам захватывающим. Погрузитесь в мир астрологии с AstroTips - вашим верным спутником на пути к гармонии и самопознанию.
          </p>
        </div>
    </section>
  );
}

function Second(){
  return (
    <div className="container3">
      <h1 className="Yslygi">Услуги астрологов</h1>
      <div className="contenty">
        <div className="text-blocke">
          <p>
          Полный разбор натальной карты <br />
          • Анализ положения планет, знаков и домов в вашей карте рождения<br />
          • Глубокое понимание ваших сильных и слабых сторон<br />
          • Персональные рекомендации по развитию и росту
          </p>
          <p>
          Составление личного гороскопа<br />
          • Прогноз на предстоящий год, основанный на движении планет<br />
          • Информация о благоприятных и сложных периодах<br />
          • Советы по использованию космических энергий для достижения целей
          </p>
          <p>  
          Таро-консультация<br />
          • Сеанс гадания на картах Таро для получения ответов на вопросы<br />
          • Раскрытие скрытых возможностей и препятствий<br />
          • Персональное руководство и поддержка в принятии решений
          </p> 
        </div>
        <div className="image-blocke">
          <img className="imagee" src="knigacard.webp" alt=""  />
        </div>
      </div>
      <Link to="/astroseans">
          <button className="butn">Узнать больше</button>
      </Link>
    </div>
  );
};








function SimpleSlider() {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 2,
    speed: 500,
    /*ТУТ МЕНЯЮ РАЗМЕРЫ Экрана */
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 412,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }

      
    ]
  };
  return (

<div className='slayd'>

        <div className='sld-container'> {/* Add the container with the sld-container class */}
          <h1 className="heading">Отзывы наших клиентов</h1>
          <Slider {...settings}>
            <div className='sld'>
              <div className="centered-container11">
                <div className="content11">
                  <img src="ksusha.webp" alt="" className='photo1'/>
                </div>
                <div className="content11">
                  <h1>Ксюша</h1>
                </div>
                <div className="content11">
                  <img src="ksushalogo.webp" alt=""  className='photo2' />
                  <p>Близнецы</p>
                </div>

                <div className="content11">
                  <p>"Я обратилась к астрологу, чтобы узнать о совместимости с моим партнером. Астролог проанализировал наши натальные карты и дал подробное описание наших сильных и слабых сторон как пары. Это помогло нам лучше понять друг друга и укрепить наши отношения. Спасибо!"</p>
                </div>
              </div>
            </div>

            <div className='sld'>
              <div className="centered-container11">
                  <div className="content11">
                    <img src="vova.webp" alt="" className='photo1'/>
                  </div>
                  <div className="content11">
                    <h1>Владимир</h1>
                  </div>
                  <div className="content11">
                    <img src="vovalogo.webp" alt="" className='photo2' />
                    <p>Телец</p>
                  </div>

                  <div className="content11">
                    <p>"Евгения – мастер своего дела! Я обращался к ней в трудный период жизни, и она оказала мне невероятную поддержку и советы, которые помогли мне обрести внутренний мир и раскрыть свой потенциал. Рекомендую ее всем, кто ищет помощь и направление в жизни."</p>
                  </div>
                </div>
              </div>

            <div className='sld'>
            <div className="centered-container11">
                <div className="content11">
                  <img src="arina.webp" alt="" className='photo1'/>
                </div>
                <div className="content11">
                  <h1>Арина</h1>
                </div>
                <div className="content11">
                  <img src="arinalogo.webp" alt="" className='photo2' />
                  <p>Овен</p>
                </div>

                <div className="content11">
                  <p>"Каждый год заказываю у Марии прогноз на год. Всегда очень понятно и точно описаны предстоящие события. Это очень помогает сориентироваться и принимать правильные решения."</p>
                </div>
              </div>
            </div>



            <div className='sld'>
            <div className="centered-container11">
                <div className="content11">
                  <img src="danya.webp" alt="" className='photo1' />
                </div>
                <div className="content11">
                  <h1>Данила</h1>
                </div>
                <div className="content11">
                  <img src="danyalogo.webp" alt="" className='photo2'  />
                  <p>Скорпион</p>
                </div>

                <div className="content11">
                  <p>"Обратившись к астрологу, я получил ценные советы по выбору профессии и узнал наилучшие временные рекомендации для начинаний. Это помогло мне четко определить свой профессиональный путь и придало уверенности."</p>
                </div>
              </div>
            </div>

          </Slider>
        </div>
    </div>
  );
}




export default Aboutmeme;







