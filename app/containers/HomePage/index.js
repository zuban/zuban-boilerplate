/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Background from './computer-screens.jpg';
import zubov from './zubov.png';
import rumyantsev from './r1.png';
import matorin from './matorin.jpg';
import css from './home.css';
export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(...props) {
    super(...props);
    this.state = {
      message: 'Отправить',
      newsMessage: 'Подписаться',
    };
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <header id="first">
          <div className="header-content">
            <div className="row justify-content-around">
              <div className="col-12 col-lg-5 col-sm-5" style={{
                marginTop: '10px',
                backgroundColor: 'white',
                border: '1px solid white',
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.12) 0px 0px 24px 0px'
              }}>
                <div
                  className="inner" style={{
                  color: 'rgb(41, 43, 44)',
                  paddingTop: '30px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  paddingBottom: '30px',
                }}
                >
                  <h1 style={{overflowX: 'auto'}}>Мы "прокачаем" тебя для работы в ведущих ИТ компаниях России</h1>
                  <h5 style={{margin: '30px'}} className="wow fadeIn text-normal wow fadeIn">Мы даем только необходимые знания</h5>
                  <a href="#mission" className="btn btn-primary-outline btn-xl page-scroll wow fadeInUp m-t-3">Я хочу
                    стать
                    разработчиком</a>
                </div>
              </div>

              <div className="col-12 col-lg-5 col-sm-5"
                   style={{
                     marginTop: '10px',
                     backgroundColor: 'white',
                     border: '1px solid white',
                     borderRadius: '10px',
                     boxShadow: 'rgba(0, 0, 0, 0.12) 0px 0px 24px 0px'
                   }}>
                <div
                  className="inner" style={{
                  marginTop: '36px',
                  color: 'rgb(41, 43, 44)',
                  paddingTop: '30px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  paddingBottom: '30px',
                }}
                >
                  <h1 style={{overflowX: 'auto'}}>Мы помогаем ИТ компаниям</h1>
                  <h5 style={{margin: '30px'}} className="wow fadeIn text-normal wow fadeIn">Мы помогаем ИТ компаниям
                    растить правильные компетенции у кандидатов</h5>
                  <a href="#mission" className="btn btn-primary-outline btn-xl page-scroll wow fadeInUp m-t-3">Нам нужен разработчик</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <nav id="topNav" className="navbar fixed-top navbar-toggleable-sm">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
              <span>☰</span>
            </button>
            <a className="navbar-brand page-scroll" href="#first">EdHunter</a>
            <div className="collapse navbar-collapse" id="collapsingNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#team">Команда</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#mission">Миссия</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#partners">Партнеры</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#courses">Курсы</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#price">Цены</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#contacts">Контакты</a>
                </li>
              </ul>
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    className="nav-link page-scroll" data-toggle="modal" title="A free Bootstrap theme"
                    href="/login"
                  >Войти/Зарегистрироваться</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section id="team" className="bg-light-gray bg-inverse" style={{color: '#fff'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-primary">Наша команда</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div className="team-member">
                  <img
                    style={{
                      borderRadius: '50%',
                      display: 'block',
                      maxWidth: '100%',
                      maxHeight: '210px',
                      height: 'auto',
                      margin: '0 auto',
                      border: '7px solid #fff',
                    }}
                    src={rumyantsev}
                    className="img-responsive img-circle" alt=""
                  />
                  <h4 style={{marginTop: '20px', textAlign: 'center'}}>Дмитрий Румянцев</h4>
                  <p className="section-heading text-primary text-center">Операционный директор</p>
                  <p style={{fontWeight: '300'}}>Закончил Ленинградский Государственный Университет по специальности
                    «Математика» в 1992 году.
                    В 1995 году закончил аспирантуру в Севере-Западном Заочном Политехническом Институте по
                    специальности «Теория Систем».
                    Профессиональную карьеру начал в 1992 году.
                    В последующие 25 лет работал в сфере ИТ технологий (Израиль, Италия), телекоммуникаций (Австрия,
                    Россия, Украина),
                    банковских технологий (Россия, Израиль). Отвечает за стратегическое и операционное управление.
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="team-member">
                  <img
                    style={{
                      borderRadius: '50%',
                      display: 'block',
                      maxWidth: '100%',
                      maxHeight: '210px',
                      height: 'auto',
                      margin: '0 auto',
                      border: '7px solid #fff',
                    }}
                    src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/5/005/0ae/235/17acdef.jpg"
                    className="img-responsive img-circle" alt=""
                  />
                  <h4 style={{marginTop: '20px', textAlign: 'center'}}>Влад Яковлев</h4>
                  <p className="section-heading text-primary text-center">Академический директор</p>
                  <p style={{fontWeight: '300'}}>В 1999 г. закончил Финансовый институт (г. Ташкент) по специальности
                    «Финансы и Кредит». В 2010 году получил степень MBA в Университете штата Калифорния (США) по
                    специальности «Стратегическое управление».
                    Профессиональную деятельность начал в 1994 году. В последующие 20 лет работал в производственной
                    (Nestle) и банковской (Deutsche Bank и АО «Сбертех») сфере. Отвечает за создание учебных
                    курсов, формирование учебных планов, взаимодействие с компаниями-партнерами и ВУЗами.</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="team-member">
                  <img
                    style={{
                      borderRadius: '50%',
                      display: 'block',
                      maxWidth: '100%',
                      maxHeight: '210px',
                      height: 'auto',
                      margin: '0 auto',
                      border: '7px solid #fff',
                    }}
                    src={matorin}
                    className="img-responsive img-circle" alt=""
                  />
                  <h4 style={{marginTop: '20px', textAlign: 'center'}}>Александр Маторин</h4>
                  <p className="section-heading text-primary text-center">Преподаватель</p>
                  <p style={{fontWeight: '300'}}>Закончил Саратовский государственный университет им. Н.Г.
                    Чернышевского,
                    факультет компьютерных наук и информационных технологий по специальности “компьютерная безопасность”
                    в 2010 году.
                    Работает в компании АО «Сбертех» в должности главного руководителя разработки.
                    Более 10ти лет опыта коммерческой разработки ПО.
                    Преподает в МФТИ на кафедре БИТ курсы по Java и распределённым системам.
                    Спикер крупнейших российских и международных Java конференций (JPoint, Joker, JBreak,
                    JEEConf). Преподаватель курса JAVA.
                  </p>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="team-member">
                  <img
                    style={{
                      borderRadius: '50%',
                      display: 'block',
                      maxWidth: '100%',
                      maxHeight: '210px',
                      height: 'auto',
                      margin: '0 auto',
                      border: '7px solid #fff',
                    }}

                    src={zubov}
                    className="img-responsive img-circle" alt=""
                  />
                  <h4 style={{marginTop: '20px', textAlign: 'center'}}>Сергей Зубов</h4>
                  <p className="section-heading text-primary text-center">Преподаватель</p>
                  <p style={{fontWeight: '300'}}>
                    Закончил Московский Физико-Технический Институт, факультет инноваций и высоких технологий.
                    Один из первых выпусников кафедры банковских информационных технологий Сбербанка.
                    С 2015 начал профессиональную деятельность в АО «Сбертех» как frontend разработчик в «Платформе
                    Поддержки Развития Бизнеса» (ППРБ).
                    В 2017 продолжил карьеру в компании Luxoft, в должности senior developer. Преподает курс по UI.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" style={{margin: '0 auto'}}>

              <h4>Хочешь у нас преподавать? Пройди по этой <a
                href="/signup-teacher"
                className="interted-education text-primary"
              >ссылке.</a>
                &nbsp; Мы с тобой свяжемся.</h4>

            </div>
          </div>
        </section>
        <section id="mission" className="edhunter-mission">
          <div className="container">
            <div className="mission-section">
              <div className="row">
                <div className="col-12 col-lg-12">
                  <h2 className="text-primary">Наша миссия:</h2>
                  <h4>Получи знания, заяви о себе, найди себя, открой мечту</h4>
                  <h4>Стань разработчиком, найди работу в ведущих IT компаниях</h4>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6 col-12">
                  <img
                    src="https://d1xwtr0qwr70yv.cloudfront.net/assets/elements/join-elite-stay-up-to-date-c19144be82dcb894c41bf2c8075436e2.png"
                    className="text-center img-fluid" style={{maxWidth: '300px', float: 'right'}}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <h2 className="edhunter-text-wrap">Я хочу стать разработчиком </h2>
                  <ul>
                    <li><p style={{marginTop: '1.5rem'}} className="text-justify">
                      Мы даем только <strong>необходимые</strong> знания
                    </p>
                    </li>
                    <li><p className="text-justify">Мы сокращаем дистанцию между тобой и профессией</p></li>
                  </ul>
                </div>
                <div className="col-12 clearfix">
                  <hr />
                </div>
                <div className="col-md-6 col-12">
                  <h2 style={{marginTop: '40px'}}>Я хочу здесь работать</h2>
                  <ul>
                    <li><p style={{marginTop: '1.5rem'}} className="text-justify">
                      Подготовим тебя под требования компании.</p>
                    </li>
                    <li><p className="text-justify">Обеспечим интервью в компании</p></li>
                    <li><p className="text-justify">Предъяви цифровой сертификат присобеседовании.</p></li>
                  </ul>
                </div>
                <div className="col-md-6 col-12">
                  <img
                    src="https://d1xwtr0qwr70yv.cloudfront.net/assets/elements/join-elite-better-career-opportunities-ff27552ddd5873eb35f45ba7f7910c5f.png"
                    className="text-center img-fluid" style={{maxWidth: '240px', float: 'left'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="SECTION_1">
          <div id="DIV_2">
            <h2 id="H2_3" className="text-primary text-center">
              Процесс обучения
            </h2>
            <div id="DIV_4">
              <div id="DIV_5">
              </div>
              <div id="DIV_6">
                <div id="DIV_7">
                  <span id="SPAN_8"></span>
                  <div id="DIV_9">
                    <span id="SPAN_10"></span>
                    <div id="DIV_11">
                      <span id="SPAN_12">1 месяц</span>
                    </div>
                    <h3 id="H3_13">
                      Вступительный тест. Этап самоподготовки.
                    </h3>
                    <h4 id="H4_14">
                      Жесткий отбор. Выдадим ссылки на полезные ресурсы и откроем доступ к видеолециям.
                    </h4>
                  </div>
                </div>
                <div id="DIV_15">
                  <span id="SPAN_16"></span>
                  <div id="DIV_17">
                    <span id="SPAN_18"></span>
                    <div id="DIV_19">
                      <span id="SPAN_20">2 месяц</span>
                    </div>
                    <h3 id="H3_21">
                      Просмотр вебинаров. Вебинары два раза в неделю.
                    </h3>
                    <h4 id="H4_22">
                      Интерактивный режим взаимодействия с преподавателем. Обсуждаем типовые задачи и их решения
                    </h4>
                  </div>
                </div>
                <div id="DIV_23">
                  <span id="SPAN_24"></span>
                  <div id="DIV_25">
                    <span id="SPAN_26"></span>
                    <div id="DIV_27">
                      <span id="SPAN_28">3 месяц</span>
                    </div>
                    <h3 id="H3_29">
                      Выполнение курсовой работы.
                    </h3>
                    <h4 id="H4_30">
                      Каждому выдается свое ТЗ на реализацию модуля системы. Вы можете обьединяться в группы.
                    </h4>
                  </div>
                </div>
                <div id="DIV_31">
                  <span id="SPAN_32"></span>
                  <div id="DIV_33">
                    <span id="SPAN_34"></span>
                    <div id="DIV_35">
                      <span id="SPAN_36">4 месяц</span>
                    </div>
                    <h3 id="H3_37">
                      Работа над ошибками. Выпускной тест.
                    </h3>
                    <h4 id="H4_38">
                      Подробно пройдемся по неверным реализациям.
                    </h4>
                  </div>
                </div>
                <div id="DIV_39">
                  <span id="SPAN_40"></span>
                  <div id="DIV_41">
                    <span id="SPAN_42"></span>
                    <div id="DIV_43">
                      <span id="SPAN_44">5 месяц</span>
                    </div>
                    <h3 id="H3_45">
                      Составление резюме. Собеседования в компаниях.
                    </h3>
                    <h4 id="H4_46">
                      Тебя будут хантить лучшие компании.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-inverse">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-lg-5 divider-diagonal divider-diagonal-r divider-inverse bg-img"
                data-bg-img={Background}
                style={{backgroundImage: `url(${Background})`}}
              >

              </div>
              <div className="col-lg-6 py-5">
                <hr className="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary"/>
                <h2 className="display-4 text-slab text-white text-uppercase mt-0 mb-5">
                  <span className="text-primary font-weight-bold">ЧТО</span> мы делаем?
                </h2>
                <div className="row mb-3">
                  <div className="col-2 col-md-1 text-center"><i className="fa fa-check text-primary icon-2x"/>
                  </div>
                  <div className="col-10 col-md-11 text-grey">
                    <h4 className="font-weight-bold text-white text-uppercase">
                      Помогаем ученикам на всем пути (вебинары).
                    </h4>
                    <ul style={{color: 'white'}}>
                      <li><p style={{color: 'white', fontWeight: '300'}} className="text-justify">
                        Интерактивное общение с преподавателями</p>
                      </li>
                      <li><p style={{color: 'white', fontWeight: '300'}}>Выполнение проектов, построенных на реальных
                        кейсах</p></li>
                      <li><p style={{color: 'white', fontWeight: '300'}}>Профессиональная подготовка резюме</p></li>
                      <li><p style={{color: 'white', fontWeight: '300'}}>Имитация собеседования в компании</p></li>
                    </ul>
                  </div>
                </div>
                <h2 className="display-4 text-slab text-white text-uppercase mt-0 mb-5">
                  <span className="text-primary font-weight-bold">КАК</span> мы это делаем?
                </h2>
                <div className="row mb-3">
                  <div className="col-2 col-md-1 text-center"><i className="fa fa-check text-primary icon-2x"/>
                  </div>
                  <div className="col-10 col-md-11 text-grey">
                    <h4 className="font-weight-bold text-white text-uppercase">
                      <a className="interted-education" href="/education">
                        С помощью концепции перевернутого обучения</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="partners" className="bg-alt" style={{minHeight: '50px', padding: '50px 0'}}>
          <div className="container-fluid" style={{
            textAlign: 'center'
          }}><h2 className="text-primary text-center">Наши партнеры в стадии переговоров</h2>

            <img src="http://toplogos.ru/images/logo-rosevrobank.png" style={{
              filter: 'grayscale(1)',
              width: '250px',
              opacity: 0.5,
            }}/>
            <img
              src="https://hsto.org/getpro/moikrug/uploads/company/830/016/812/logo/medium_db0b3701909fd9944e6e9a5310f023be.png"
              style={{
                filter: 'grayscale(1)',
                width: '250px',
                opacity: 0.5,
              }}/>
            <div className="row text-center"><a href="/signup-employer"
                                                className="btn btn-primary-outline btn-lg wow flipInX text-uppercase"
                                                style={{margin: '20px auto'}}>Стать партнером</a></div>
          </div>
          <br />
        </section>
        <section id="courses">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="mt-0 text-primary">Курсы</h2>
                <hr className="primary"/>
              </div>
            </div>
          </div>
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-lg-4 col-md-4 text-center">
                <div
                  className="feature" style={{
                  backgroundColor: 'white',
                  marginBottom: '20px',
                  padding: '10px',
                  border: '1px solid white',
                  borderRadius: '10px',
                  boxShadow: '0px 0px 24px 0px rgba(0,0,0,0.12)',
                }}
                >
                  <img
                    style={{maxWidth: '150px'}} className="card-img-top img-fluid wow fadeIn" data-wow-delay=".1s"
                    src="https://www.seeklogo.net/wp-content/uploads/2011/06/java-logo-vector.png"
                    alt="Card image cap"
                  />

                  <div className="text-center edhunter-courses-block">
                    <h5 className="mt-0 text-primary" style={{marginTop: '10px !important'}}>Длительность курса: 5
                      месяцев</h5>
                    <div className="nav flex-column text-center">
                      <a className="nav-link"><strong>Sprint 1.</strong> Знакомство с платформой Java. Изучение основных
                        синтаксических
                        конструкций языка.</a>
                      <a className="nav-link"><strong>Sprint 2.</strong> Классы в Java, основные пакеты(lang, util, io).
                        ООП</a>
                      <a className="nav-link"><strong>Sprint 3.</strong> Структуры данных в Java. Основные интерфейсы
                        коллекций и их
                        реализации.
                      </a>
                      <a className="nav-link"><strong>Sprint 4.</strong> Сборка проекта. Maven. Тестирование с помощью
                        JUnit.
                      </a>
                      <a className="nav-link"><strong>Sprint 5.</strong> Обработка исключений. Иерархия исключений.</a>
                      <a className="nav-link"><strong>Sprint 6.</strong> Generics. Параметризация классов, методов,
                        переменных.</a>
                      <a className="nav-link"><strong>Sprint 7.</strong> Reflection. Пакет java.lang.reflect</a>
                      <a className="nav-link"><strong>Sprint 8.</strong> Загрузка классов. Класслоадеры, их
                        иерархия.</a>
                      <a className="nav-link"><strong>Sprint 9.</strong> Java 8. Дефолтные методы.</a>
                      <a className="nav-link"><strong>Sprint 10.</strong> Введение в многопоточность.</a>
                      <a className="nav-link"><strong>Sprint 11.</strong> Java memory model.</a>
                      <a className="nav-link"><strong>Sprint 12.</strong> Пакет java.util.concurrent.</a>
                      <a className="nav-link"><strong>Sprint 13.</strong> Сериализация. </a>
                      <a className="nav-link"><strong>Sprint 14.</strong> JVM. Оптимизации JIT.</a>
                    </div>
                    <a className="interted-education  text-primary" style={{marginTop: '10px !important'}} href="/java">Подробнее</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 text-center">
                <div
                  className="feature" style={{
                  backgroundColor: 'white',
                  padding: '10px',
                  marginBottom: '20px',
                  border: '1px solid white',
                  borderRadius: '10px',
                  boxShadow: '0px 0px 24px 0px rgba(0,0,0,0.12)',
                }}
                >
                  <img
                    style={{marginTop: '15px', height: '134px'}} className="card-img-top img-fluid wow fadeIn"
                    data-wow-delay=".1s"
                    src="http://www.kvcc.me.edu/CMSContent/Departments/NonCredit_Energy_Services_Ctr/New-Course.png"
                    alt="Card image cap"
                  />
                  <div className="text-center edhunter-courses-block">
                    <h5 className="mt-0 text-primary" style={{marginTop: '10px!important', color: 'red!important'}}>
                      Здесь может быть курс по Вашим требованиям.</h5>
                    <div className="nav flex-column text-center">
                    </div>
                    <a className="interted-education  text-primary" style={{marginTop: '10px !important'}}
                       href="/signup-employer">Заказать</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 text-center">
                <div
                  className="feature" style={{
                  backgroundColor: 'white',
                  marginBottom: '20px',
                  padding: '10px',
                  border: '1px solid white',
                  borderRadius: '10px',
                  boxShadow: '0px 0px 24px 0px rgba(0,0,0,0.12)',
                }}
                >
                  <img
                    style={{marginTop: '45px', maxWidth: '270px'}} className="card-img-top img-fluid wow fadeIn"
                    data-wow-delay=".1s"
                    src="http://www.seanhelvey.com/assets/images/seanhelvey/2014/08/html5-css-javascript-logos.png"
                    alt="Card image cap"
                  />
                  <div className="text-center edhunter-courses-block">
                    <h5 className="mt-0 text-primary" style={{marginTop: '10px !important', color: 'red!important'}}>
                      Javascript + React</h5>
                    <h5 className="mt-0" style={{marginTop: '10px !important', color: 'red'}}>
                      Курс в разработке</h5>
                    <div className="nav flex-column text-center">
                      <a className="nav-link"><strong>Sprint 1.</strong> Кросс-браузерная верстка HTML и CSS.</a>
                      <a className="nav-link"><strong>Sprint 2.</strong> Язык программирования JavaScript.</a>
                      <a className="nav-link"><strong>Sprint 3.</strong> JavaScript в браузере и Web API.
                      </a>
                      <a className="nav-link"><strong>Sprint 4.</strong> Библиотека React.
                      </a>
                      <a className="nav-link"><strong>Sprint 5.</strong> Создание одностраничного веб-приложения.</a>
                      <a className="nav-link"><strong>Sprint 6.</strong> AJAX.</a>
                      <a className="nav-link"><strong>Sprint 7.</strong> Композиция компонентов. JSX.</a>
                      <a className="nav-link"><strong>Sprint 8.</strong> Роутинг в приложении.</a>
                      <a className="nav-link"><strong>Sprint 9.</strong> Шаблоны MVC, MVVM.</a>
                      <a className="nav-link"><strong>Sprint 10.</strong> Шаблоны pub/sub, observer, mediator.</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <aside id="price" className="bg-inverse">
          <div className="container">
            <h2 className="text-primary text-center">Наши цены</h2>
            <div id="fdw-pricing-table" className="row" style={{justifyContent: 'center'}}>
              {/*<div className="col-lg-3 col-md-3">*/}
              {/*<div className="plan plan1">*/}
              {/*<div className="header">Ежемесячный</div>*/}
              {/*<div className="price">6 500&#8381;</div>*/}
              {/*<div className="monthly">в месяц</div>*/}
              {/*<div className="monthly"><strong>рассрочка разового платежа</strong></div>*/}
              {/*<ul>*/}
              {/*<li><b>5</b> спринтов курса java </li>*/}
              {/*<li><b>30</b> лекций в группе</li>*/}
              {/*<li><b>1</b> cобеседование, при удачной сдаче экзамена</li>*/}
              {/*</ul>*/}
              {/*<a className="signup" href="/signup">Зарегистрироваться</a>*/}
              {/*</div>*/}
              {/*</div>*/}
              <div className="col-lg-3 col-md-3">
                <div className="plan plan2 popular-plan">
                  <div className="header">Разовый
                  </div>
                  <div className="price">30 000&#8381;</div>
                  <div className="monthly">обучение длится 5 месяцев</div>
                  <ul>
                    <li><b>15</b> спринтов курса java.</li>
                    <li><b>1</b> резюме. поможем составить его правильно</li>
                    <li><b>3</b> собеседования в разные компании</li>
                  </ul>
                  <a className="signup" href="/signup">Зарегистрироваться</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="plan plan>
                  <div className="header">Ежемесячный</div>
                  <div className="price">6 500&#8381;</div>
                  <div className="monthly">в месяц</div>
                  <div className="monthly"><strong>рассрочка разового платежа</strong></div>
                  <ul>
                    <li><b>5</b> спринтов курса java</li>
                    <li><b>30</b> лекций в группе</li>
                    <li><b>1</b> cобеседование, при удачной сдаче экзамена</li>
                  </ul>
                  <a className="signup" href="/signup">Зарегистрироваться</a>
                </div>
              </div>
              {/*<div className="col-lg-3 col-md-3">*/}
              {/*<div className="plan plan4 ">*/}
              {/*<div className="header">Для начинающих</div>*/}
              {/*<div className="price">10000</div>*/}
              {/*<div className="monthly">в месяц</div>*/}
              {/*<ul>*/}
              {/*<li><b>3</b> Курса</li>*/}
              {/*<li><b>15</b> Лекций</li>*/}
              {/*<li><b>3</b> Резюме</li>*/}
              {/*<li><b>10</b> Собеседований</li>*/}
              {/*</ul>*/}
              {/*<a className="signup" href="/signup">Зарегистрироваться</a>*/}
              {/*</div>*/}
              {/*</div>*/}
            </div>
          </div>

        </aside>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8" style={{margin: '2rem auto'}}>
              <ul className="event-list">
                <li>
                  <time dateTime="2014-07-20">
                    <span className="day">1</span>
                    <span className="month">Авг</span>
                    <span className="year">2014</span>
                    <span className="time">ALL DAY</span>
                  </time>
                  <img
                    alt="Independence Day" src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg"
                    style={{marginRight: '20px'}}
                  />
                  <div className="info">
                    <h2 className="title">Открытие площадки.</h2>
                    <p className="desc">День открытых дверей. Открытие платформы. Старт первого набора.
                    </p>
                  </div>
                  <div className="social">
                    <ul>
                      <li className="facebook" style={{width: '33%'}}><a
                        href="https://www.facebook.com/EdHunterra/"><span
                        className="fa fa-facebook"
                      ></span></a></li>
                    </ul>
                  </div>
                </li>

                <li>
                  <time
                    dateTime="2014-07-20 0000"
                    style={{color: 'rgb(94, 94, 94)', backgroundColor: 'rgb(255, 255, 255)'}}
                  >
                    <span className="day">1</span>
                    <span className="month">Сен</span>
                    <span className="year">2017</span>
                    <span className="time">12:00 AM</span>
                  </time>
                  <div className="info">
                    <h2 className="title">Первое занятие</h2>
                    <p className="desc">Первое занятие курса java. Первый набор - 30 человек. Программа на 5
                      месяцев.</p>
                  </div>
                  <div className="social">
                    <ul>
                      <li className="facebook" style={{width: '33%'}}><a
                        href="https://www.facebook.com/EdHunterra/"><span
                        className="fa fa-facebook"
                      ></span></a></li>
                    </ul>
                  </div>
                </li>

                <li>
                  <time dateTime="2014-07-20 2000">
                    <span className="day">1</span>
                    <span className="month">Фев</span>
                    <span className="year">2017</span>
                    <span className="time">8:00 PM</span>
                  </time>
                  <img
                    alt="My 24th Birthday!" src="https://farm5.staticflickr.com/4150/5045502202_1d867c8a41_q.jpg"
                    style={{marginRight: '20px'}}
                  />
                  <div className="info">
                    <h2 className="title">Первый выпуск.</h2>
                    <p className="desc">Первые собедования. Вы получите работу.
                    </p>
                  </div>
                  <div className="social">
                    <ul>
                      <li className="facebook" style={{width: '33%'}}><a
                        href="https://www.facebook.com/EdHunterra/"><span
                        className="fa fa-facebook"
                      ></span></a></li>
                    </ul>
                  </div>
                </li>

                <li>
                  <time
                    dateTime="2014-07-31 1600"
                    style={{color: 'rgb(94, 94, 94)', backgroundColor: 'rgb(255, 255, 255)'}}
                  >
                    <span className="day">1</span>
                    <span className="month">Дек</span>
                    <span className="year">2017</span>
                    <span className="time">4:00 PM</span>
                  </time>
                  <div className="info">
                    <h2 className="title">Презентация новых курсов.</h2>
                    <p className="desc">Откроем новые курсы Javascript, DevOps и другие...</p>
                  </div>
                  <div className="social">
                    <ul>
                      <li className="facebook" style={{width: '33%'}}><a
                        href="https://www.facebook.com/EdHunterra/"><span
                        className="fa fa-facebook"
                      ></span></a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="one">
          <div id="testimonials" className="p-3 py-lg-6 bg-inverse">
            <div className="container">
              <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary"/>
              <h2 className="text-white text-center text-uppercase font-weight-bold my-0">
                Нас рекомендуют
              </h2>
              <h5 className="text-center font-weight-light mt-2 mb-0 text-grey">
                Они нашли работу мечты.
              </h5>
              <hr className="mb-5 w-50 mx-auto"/>
              <div className="row">

                <div className="col-md-4 d-md-flex">
                  <blockquote
                    className="blockquote-bubble blockquote-center animated fadeIn animated-done"
                    data-animate="fadeIn" data-animate-delay="0.2" style={{animationDelay: '0.1s'}}
                  >
                    <p className="blockquote-bubble-content bg-white text-center">Edhunter дал мне необходимые знания
                      для старта моей карьеры!</p>
                    <small className="text-grey">
                      <img
                        src="http://demos.themelize.me/appstrap3.0.6/theme/assets/img/team/steve@2x.jpg"
                        alt="Jimi Bloggs" className="rounded-circle mr-2" width="50" height="50"
                      />
                      Здесь может быть твое имя <span className="text-primary font-weight-bold">/</span> <a href="#">
                      Твоя компания</a>
                    </small>
                  </blockquote>
                </div>

              </div>
            </div>
          </div>
        </div>
        <aside className="bg-alt">
          <div className="container text-center">
            <div className="call-to-action">
              <h2 className="text-primary">Для компаний</h2>
              <p className="wide-space text-center text-uppercase">Партнерская программа - это возможность найти и
                прособеседовать лучших молодых специалистов
                с необходимыми вашей компании компетенциями. Мы также готовы создать учебный курс по вашему заказу и
                предлагаем вам воспользоваться опцией “таргетированный найм”. Eсли ваши сотрудники хотят и умеют
                обучать, они могут стать нашими преподавателями.
              </p>
              <a
                href="/signup-employer"
                className="btn btn-primary-outline btn-lg wow flipInX text-uppercase"
              >Для компаний</a>
            </div>
            <br />
          </div>
        </aside>
        <section id="contacts">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <h2 className="margin-top-0 wow fadeIn text-primary">Связаться с нами</h2>
                <hr className="primary"/>
                <p>Предложите свой курс, или оставьте ваши контакты, мы с вами свяжемся.</p>
              </div>
              <div className="col-lg-10 offset-lg-1 text-center">
                <form className="contact-form row" method="POST" action="api/landingContact">
                  <div className="col-md-4">
                    <label></label>
                    <input type="text" className="form-control" name="name" placeholder="Имя"/>
                  </div>
                  <div className="col-md-4">
                    <label></label>
                    <input type="text" className="form-control" name="email" placeholder="Почта"/>
                  </div>
                  <div className="col-md-4">
                    <label></label>
                    <input type="tel" className="form-control" name="phone" placeholder="Телефон"/>
                  </div>
                  <div className="col-md-12">
                    <label></label>
                    <textarea className="form-control" rows="9" name="message" placeholder="Ваше сообщение"/>
                  </div>
                  <div className="col-md-6 offset-md-3">
                    <label></label>
                    <button
                      onClick={() => this.setState({message: 'Спасибо! Мы с Вами свяжемся.'})}
                      type="submit" data-toggle="modal" data-target="#feedbackModal"
                      className="btn btn-primary btn-block btn-lg"
                    >{this.state.message} <i
                      className="ion-android-arrow-forward"
                    ></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-6 col-sm-3">
                <h6 className="text-uppercase">© 2017 Edhunter ®</h6>
                <ul className="list-unstyled">
                  <li><a
                    href="/education"
                  >Концепция перевернутого обучения</a></li>
                  <li><a href="/signup">Регистрация для студентов</a></li>
                  <li><a href="/signup-employer">Регистрация для работодателя</a></li>
                  <li><a href="/signup-teacher">Регистрация для преподавателей</a></li>
                </ul>
              </div>
              <div className="col-6 col-sm-3 column">
                {/* <h6 className="text-uppercase">О нас</h6>*/}
                {/* <ul className="list-unstyled">*/}
                {/* <li><a href="#">Контакты</a></li>*/}
                {/* <li><a href="#">Условия обучения</a></li>*/}
                {/* <li><a href="#">Расположение офиса</a></li>*/}
                {/* </ul>*/}
              </div>
              <div className="col-12 col-sm-3 column">
                <h6 className="text-uppercase">Подпишись на обновления</h6>
                <form method="POST" action="api/news">
                  <div className="form-group">
                    <input
                      type="text" className="form-control" name="email" title="No spam, we promise!"
                      placeholder="Введите ваш email"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary" type="submit"
                      onClick={() => this.setState({newsMessage: 'Подписка оформлена!'})}
                    >
                      {this.state.newsMessage}
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-12 col-sm-3 text-right">
                <h6 className="text-uppercase">Мы в социальных сетях</h6>
                <ul className="list-inline">
                  <li className="list-inline-item"><a
                    rel="nofollow" href="https://www.facebook.com/EdHunterra/"
                    title="Facebook"
                  ><i
                    className="icon-lg ion-social-facebook-outline"
                  ></i></a></li>
                </ul>
              </div>
            </div>
            <br />
            <span className="float-right text-muted small"><a>© 2017 Edhunter ®</a></span>
          </div>
        </footer>
      </div>
    );
  }
}
