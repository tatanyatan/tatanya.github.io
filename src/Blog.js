import React from 'react';
import "./Blog.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Bloge() {
    var settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 2,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 412,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    };
    


    const handleClick1 = () => {
        window.location.href = "https://www.youtube.com/@renataraevskaya/videos";
    };

    const handleClick2 = () => {
        window.location.href = "https://www.youtube.com/watch?v=bWfeGudpc9k";
    };

    const handleClick3 = () => {
        window.location.href = "https://www.youtube.com/watch?v=rT_8ChdNkhw";
    };

    const handleClick4 = () => {
        window.location.href = "https://uznayvse.ru/astrology/ascendent-v-goroskope-chto-tvoy-voshodyaschiy-znak-govorit-o-tebe.html";
    };

    const handleClick5 = () => {
        window.location.href = "https://uznayvse.ru/astrology/astrologicheskiy-recept-schastya-chto-nuzhno-znat-kazhdomu-iz-12-znakov.html";
    };

    const handleClick6 = () => {
        window.location.href = "https://www.youtube.com/watch?v=zebjCUIMKtA";
    };

    return (
        <div className="slayd1">
        <div className="sld-container"> 
            <h1 className="headingj">Видеозаписи по астрологии</h1>
            <Slider {...settings}>

            <div className="sld">
                <div className="rounded-block">
                <div className="image-blogg">
                    <img className="image-blog" src="polintro.webp" alt="" />
                </div>
                <div className="text-blog">
                    <p>
                    "Как работает таро?"<br /> разбор от канала "Правое полушарие
                    Интроверта"
                    </p>
                </div>
                <div className="submitе">
                    <button type="submitе" onClick={handleClick2}>
                    Смотреть на YouTube
                    </button>
                </div>
                </div>
            </div>

            <div className="sld">
                <div className="rounded-block">
                <div className="image-blogg">
                    <img className="image-blog" src="man.webp" alt="" />
                </div>
                <div className="text-blog">
                    <p>
                    Характеристика всех знаков зодиака. Cоветы от канала Астронова
                    </p>
                </div>
                <div className="submitе">
                    <button type="submitе" onClick={handleClick3}>
                    Смотреть на YouTube
                    </button> 
                </div>
                </div>
            </div>

            <div className="sld">
                <div className="rounded-block">
                <div className="image-blogg">
                    <img className="image-blog" src="ascendent.webp" alt="" />
                </div>
                <div className="text-blog">
                    <p>
                    Асцендент в гороскопе: что твой восходящий знак говорит о тебе?
                    </p>
                </div>
                <div className="submitе">
                    <button type="submitе" onClick={handleClick4}>
                    Узнать больше
                    </button>
                </div>
                </div>
            </div>

            <div className="sld">
                <div className="rounded-block">
                <div className="image-blogg">
                    <img className="image-blog" src="astrokniga.webp" alt="" />
                </div>
                <div className="text-blog">
                    <p>
                    Секреты счастья: что нужно знать каждому знаку зодиака
                    </p>
                </div>
                <div className="submitе">
                    <button type="submitе" onClick={handleClick5}>
                    Узнать больше
                    </button>
                </div>
                </div>
            </div>

            <div className="sld">
                <div className="rounded-block">
                <div className="image-blogg">
                    <img className="image-blog" src="skeptic.webp" alt="" />
                </div>
                <div className="text-blog">
                    <p>
                    Таролог vs скептик Противостояние<br /> шоу от канала "Секреты"
                    </p>
                </div>
                <div className="submitе">
                    <button type="submitе" onClick={handleClick6}>
                    Смотреть на YouTube
                    </button>
                </div>
                </div>
            </div>

            <div className="sld">
                <div className="rounded-block">
                <div className="image-blogg">
                    <img className="image-blog" src="Renata.webp" alt="" />
                </div>
                <div className="text-blog">
                    <p>
                    Общие таро прогнозы на каждый месяц<br /> от Ренаты Раевской
                    </p>
                </div>
                <div className="submitе">
                    <button type="submitе" onClick={handleClick1}>
                    Смотреть на YouTube
                    </button>
                </div>
                </div>
            </div>

            </Slider>
        </div>
        </div>
    );
    }


export default Bloge;