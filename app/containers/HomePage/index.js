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
export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ height: '100%' }}>
        <header id="first">
          <div className="header-content">
            <div
              className="inner" style={{
                paddingTop: '30px',
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingBottom: '30px',
                borderRadius: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.58)',
              }}
            >
              <h1 style={{ overflowX: 'auto' }}>Мы "прокачаем" тебя для работы в ведущих ИТ компаниях России</h1>
              <h5 style={{ margin: '30px' }} className="wow fadeIn text-normal wow fadeIn">Мы помогаем ИТ компаниям растить правильные компетенции у кандидатов</h5>
              <a href="#mission" className="btn btn-primary-outline btn-xl page-scroll wow fadeInUp m-t-3">Я хочу стать
                разработчиком</a>
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
                  >Войти/Регистрация</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section id="team" className="bg-light-gray bg-inverse" style={{ color: '#fff' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-primary">Наша команда</h2>
                <p className="section-subheading text-muted wide-space text-center text-uppercase">Преподаватели и
                  руководители</p>
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
                  <h4 style={{ marginTop: '20px', textAlign: 'center' }}>Дмитрий Румянцев</h4>
                  <p className="section-heading text-primary text-center">Операционный директор</p>
                  <p style={{ fontWeight: '300' }}>Закончил Ленинградский Государственный Университет по специальности «Математика» в 1992 году.
                    В 1995 году закончил аспирантуру в Севере-Западном Заочном Политехническом Институте по специальности «Теория Систем».
                    Профессиональную карьеру начал в 1992 году.
                    В последующие 25 лет работал в  сфере ИТ технологий (Израиль, Италия), телекоммуникаций (Австрия, Россия, Украина),
                    банковских технологий (Россия, Израиль).
                    В АО «Сбертех» работает с 2014 года. Начальник отдела управления рисками и инцидентами.
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
                    src={matorin}
                    className="img-responsive img-circle" alt=""
                  />
                  <h4 style={{ marginTop: '20px', textAlign: 'center' }}>Александр Маторин</h4>
                  <p className="section-heading text-primary text-center">Преподаватель</p>
                  <p style={{ fontWeight: '300' }}>Закончил Саратовский государственный университет им. Н.Г. Чернышевского,
                    факультет компьютерных наук и информационных технологий по специальности “компьютерная безопасность” в 2010 году.
                    Работает в компании АО «Сбертех» в должности главного руководителя разработки.
                    Отвечает за техническую сторону систем управления рисками на финансовых рынках.
                    Преподает в МФТИ на кафедре БИТ курсы по Java и по распределённым системам.
                    Выступает на крупнейших российских и международных Java конференциях (JPoint, Joker, JBreak, JEEConf).
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
                  <h4 style={{ marginTop: '20px', textAlign: 'center' }}>Влад Яковлев</h4>
                  <p className="section-heading text-primary text-center">Академический директор</p>
                  <p style={{ fontWeight: '300' }}>В 1999 г. закончил Финансовый институт (г. Ташкент) по специальности «Финансы и Кредит». В 2010 году получил степень MBA в Университете штата Калифорния (США) по специальности
                    «Стратегическое управление».
                    Профессиональную деятельность начал в 1994 году. В последующие 20 лет работал в производственной
                    (Nestle) и банковской (Deutsche Bank и АО «Сбертех») сфере. В проекте отвечает за создание учебных курсов,
                    формирование учебных планов, взаимодействие с компаниями-партнерами и ВУЗами.</p>
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
                  <h4 style={{ marginTop: '20px', textAlign: 'center' }}>Сергей Зубов</h4>
                  <p className="section-heading text-primary text-center">Преподаватель</p>
                  <p style={{ fontWeight: '300' }}>
                    Закончил Московский Физико-Технический Институт, факультет инноваций и высоких технологий.
                    Один из первых выпусников кафедры банковских информационных технологий Сбербанка.
                    С 2015 начал профессиональную деятельность АО «Сбертех» как frontend разработчик в «Платформе Поддержки Развития Бизнеса» (ППРБ).
                    В 2017 продолжил карьеру в компании Luxoft, в должности senior developer.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" style={{ margin: '0 auto' }}>

              <h4>Хочешь у нас преподавать? Пройди по этой <a
                href="/login-mentor"
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
                    className="text-center img-fluid" style={{ maxWidth: '300px', float: 'right' }}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <h2 className="edhunter-text-wrap">Я хочу стать разработчиком </h2>
                  <ul>
                    <li><p style={{ marginTop: '1.5rem' }} className="text-justify">
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
                  <h2 style={{ marginTop: '40px' }}>Я хочу здесь работать</h2>
                  <ul>
                    <li><p style={{ marginTop: '1.5rem' }} className="text-justify">
                      Подготовим тебя под требования компании.</p>
                    </li>
                    <li><p className="text-justify">Обеспечим интервью в компании</p></li>
                    <li><p className="text-justify">Выдадим цифровой сертификат</p></li>
                  </ul>
                </div>
                <div className="col-md-6 col-12">
                  <img
                    src="https://d1xwtr0qwr70yv.cloudfront.net/assets/elements/join-elite-better-career-opportunities-ff27552ddd5873eb35f45ba7f7910c5f.png"
                    className="text-center img-fluid" style={{ maxWidth: '240px', float: 'left' }}
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
                      Жесткий отбор. Выдадим ссылки на полезные ресурсы.
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
                      Просмотр вебинаров. Каждый четверг - семинар.
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
                style={{ backgroundImage: `url(${Background})` }}
              >

              </div>
              <div className="col-lg-6 py-5">
                <hr className="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary" />
                <h2 className="display-4 text-slab text-white text-uppercase mt-0 mb-5">
                  <span className="text-primary font-weight-bold">ЧТО</span> мы делаем?
                </h2>
                <div className="row mb-3">
                  <div className="col-2 col-md-1 text-center"><i className="fa fa-check text-primary icon-2x" />
                  </div>
                  <div className="col-10 col-md-11 text-grey">
                    <h4 className="font-weight-bold text-white text-uppercase">
                      Помогаем на всем пути
                    </h4>
                    <ul style={{ color: 'white' }}>
                      <li><p style={{ color: 'white', fontWeight: '300' }} className="text-justify">
                        Интерактивное общение с преподавателями</p>
                      </li>
                      <li><p style={{ color: 'white', fontWeight: '300' }}>Выполнение проектов, построенных на реальных
                        кейсах</p></li>
                      <li><p style={{ color: 'white', fontWeight: '300' }}>Профессиональная подготовка резюме</p></li>
                      <li><p style={{ color: 'white', fontWeight: '300' }}>Имитация собеседования в компании</p></li>
                    </ul>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-2 col-md-1 text-center"><i className="fa fa-check text-primary icon-2x" />
                  </div>
                  <div className="col-10 col-md-11 text-grey">
                    <h4 className="font-weight-bold text-white text-uppercase">
                      КАК мы это делаем?
                    </h4>
                    <ul style={{ color: 'white' }}>
                      <li><a className="interted-education">
                        С помощью концепции перевернутого обучения</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="partners" className="bg-alt" style={{ minHeight: '50px', padding: '50px 0' }}>
          <div className="container-fluid">
            <h2 className="text-primary text-center">Наши партнеры</h2>
            <div className="row">
              <div className="col-10 offset-1">
                <div className="row">
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center">
                    <div
                      className="card"
                      style={{ marginTop: '10px', backgroundColor: '#ffffff', border: '0px solid rgba(0,0,0,.125)' }}
                    >
                      <img src="http://kazhdysboy.ru/i/logo/Alfa-bank-logo.png" className="img-fluid" />
                      <div className="card-img-overlay">
                        <h4 className="card-title text-center">
                          <a
                            className="text-light"
                            data-src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg"
                          ></a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center">
                    <div
                      className="card"
                      style={{
                        margin: '4px auto',
                        maxWidth: '130px',
                        backgroundColor: '#ffffff',
                        border: '0px solid rgba(0,0,0,.125)',
                      }}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Yandex_logo_ru.svg/1024px-Yandex_logo_ru.svg.png"
                        className="img-fluid"
                      />
                      <div className="card-img-overlay">
                        <h4 className="card-title text-center">
                          <a
                            className="text-light" href="#galleryModal" data-toggle="modal"
                            data-src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg"
                          ></a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center">
                    <div
                      className="card card-inverse"
                      style={{ marginTop: '15px', backgroundColor: '#ffffff', border: '0px solid rgba(0,0,0,.125)' }}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/e/e9/Kaspersky_Lab_logo.svg"
                        className="img-fluid"
                      />
                      <div className="card-img-overlay">
                        <h4 className="card-title text-center">
                          <a
                            className="text-light" href="#galleryModal" data-toggle="modal"
                            data-src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg"
                          ></a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center">
                    <div
                      className="card"
                      style={{
                        margin: '10px auto',
                        maxWidth: '150px',
                        backgroundColor: '#ffffff',
                        border: '0px solid rgba(0,0,0,.125)',
                      }}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/ABBYY_logo.svg/2000px-ABBYY_logo.svg.png"
                        className="img-fluid"
                      />
                      <div className="card-img-overlay">
                        <h4 className="card-title text-center">
                          <a
                            className="text-light" href="#galleryModal" data-toggle="modal"
                            data-src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg"
                          ></a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center">
                    <div
                      className="card"
                      style={{ marginTop: '8px', backgroundColor: '#ffffff', border: '0px solid rgba(0,0,0,.125)' }}
                    >
                      <img src="http://www.sberbank.kz/images/sber-logo.png" className="img-fluid" />
                      <div className="card-img-overlay">
                        <h4 className="card-title text-center">
                          <a
                            className="text-light" href="#galleryModal" data-toggle="modal"
                            data-src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample35.jpg"
                          ></a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center">
                    <div
                      className="card"
                      style={{
                        margin: '4px auto',
                        maxWidth: '130px',
                        backgroundColor: '#ffffff',
                        border: '0px solid rgba(0,0,0,.125)',
                      }}
                    >
                      <img
                        src="https://www.luxoft.com/upload/medialibrary/d73/luxoft_logo_company_500.png"
                        className="img-fluid"
                      />
                      <div className="card-img-overlay">
                        <h4 className="card-title text-center">
                          <a
                            className="text-light" href="#galleryModal" data-toggle="modal"
                            data-src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample16.jpg"
                          ></a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-primary text-center " style={{ marginTop: '2rem', marginBottom: '1rem' }}>Мы сотрудничаем
              с вузами</h2>
            <div className="row">
              <div className="col-10 offset-1">
                <div className="row">
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center">
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center">
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center">
                    <div
                      className="card card-inverse"
                      style={{ backgroundColor: '#ffffff', border: '0px solid rgba(0,0,0,.125)' }}
                    >
                      <img
                        src="https://mipt.ru/upload/medialibrary/c92/emblema_mfti.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center">
                    <div
                      className="card"
                      style={{ backgroundColor: '#ffffff', border: '0px solid rgba(0,0,0,.125)' }}
                    >
                      <img
                        src="http://toplogos.ru/images/logo-mgu.png"
                        className="img-fluid" style={{ maxHeight: '100px', maxWidth: '100px' }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center">
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </section>
        <section id="courses">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="mt-0 text-primary">Курсы</h2>
                <hr className="primary" />
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
                    style={{ maxWidth: '150px' }} className="card-img-top img-fluid wow fadeIn" data-wow-delay=".1s"
                    src="https://www.seeklogo.net/wp-content/uploads/2011/06/java-logo-vector.png"
                    alt="Card image cap"
                  />

                  <div className="text-center edhunter-courses-block">
                    <h5 className="mt-0 text-primary" style={{ marginTop: '10px !important' }}>Длительность курса: 3
                      месяца</h5>
                    <div className="nav flex-column text-center">
                      <a
                        className="nav-link"

                      >Модуль 1.
                        Введение в язык программирования “Java”
                      </a>
                      <a className="nav-link">Модуль 2.
                        Переменные, типы данных, операторы
                      </a>
                      <a
                        className="nav-link"

                      >Модуль
                        4. Циклы</a>
                      <a
                        className="nav-link"

                      >Модуль 5.
                        Строки, массивы одномерные, многомерные</a>
                      <a className="nav-link">Модуль
                        6.Методы (на примере статических методов)</a>
                    </div>
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
                    style={{ marginTop: '45px', maxWidth: '270px' }} className="card-img-top img-fluid wow fadeIn"
                    data-wow-delay=".1s"
                    src="http://www.seanhelvey.com/assets/images/seanhelvey/2014/08/html5-css-javascript-logos.png"
                    alt="Card image cap"
                  />
                  <div className="text-center edhunter-courses-block">
                    <h5 className="mt-0 text-primary" style={{ marginTop: '10px !important', color: 'red!important' }}>
                      КУРС
                      В
                      РАЗРАБОТКЕ</h5>
                    <div className="nav flex-column text-center">
                      <a
                        className="nav-link"

                      >Модуль 1.
                        Введение в Web-технологии. Структура HTML</a>
                      <a className="nav-link">Модуль 2.
                        Форматирование текста при помощи HTML и CSS</a>
                      <a
                        className="nav-link"

                      >Модуль
                        3. Списки. CSS отступы и поля.
                      </a>
                      <a
                        className="nav-link"

                      >Модуль 4.
                        Графика в web-дизайне. Оптимизация графики. Гиперссылки. Принципы навигации
                        web-сайта.</a>
                      <a className="nav-link">Модуль
                        5. Таблицы.</a>
                      <a className="nav-link">Модуль
                        6. Позиционирование. Верстка web-страниц блоками</a>
                      <a className="nav-link">Модуль
                        7. Формы. Фреймы</a>
                    </div>
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
                    style={{ marginTop: '15px', height: '134px' }} className="card-img-top img-fluid wow fadeIn"
                    data-wow-delay=".1s"
                    src="http://cdn.thinglink.me/api/image/723214075936374785/1024/10/scaletowidth"
                    alt="Card image cap"
                  />

                  <div className="text-center edhunter-courses-block">
                    <h5 className="mt-0 text-primary" style={{ marginTop: '10px!important', color: 'red!important' }}>КУРС
                      В
                      РАЗРАБОТКЕ</h5>
                    <div className="nav flex-column text-center">
                      <a
                        className="nav-link"

                      >Модуль 1.
                        Введение в язык программирования “Java”
                      </a>
                      <a className="nav-link" >Модуль 2.
                        Переменные, типы данных, операторы
                      </a>
                      <a
                        className="nav-link"

                      >Модуль
                        4. Циклы</a>
                      <a
                        className="nav-link"

                      >Модуль 5.
                        Строки, массивы одномерные, многомерные</a>
                      <a className="nav-link" >Модуль
                        6.Методы (на примере статических методов)</a>
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
            <div id="fdw-pricing-table" className="row">
              <div className="col-lg-3 col-md-3">
                <div className="plan plan1">
                  <div className="header">Ежемесячный</div>
                  <div className="price">6500</div>
                  <div className="monthly">в месяц</div>
                  <ul>
                    <li><b>8</b> Курсов</li>
                    <li><b>12</b> Лекций</li>
                    <li><b>1</b> Компания</li>
                  </ul>
                  <a className="signup" href="/login">Регистрация</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="plan plan2 popular-plan">
                  <div className="header">Разовый
                  </div>
                  <div className="price">30000</div>
                  <div className="monthly">за 5 месяцев</div>
                  <div className="monthly"> Экономия - 10%</div>

                  <ul>
                    <li><b>8</b> Курсов</li>
                    <li><b>12</b> Лекций</li>
                    <li><b>1</b> Резюме</li>
                  </ul>
                  <a className="signup" href="/login">Регистрация</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="plan plan3">
                  <div className="header">Экспресс</div>
                  <div className="price">3000</div>
                  <div className="monthly">в месяц</div>
                  <ul>
                    <li><b>1</b> Курс</li>
                    <li><b>5</b> Лекций</li>
                    <li><b>1</b> Резюме</li>
                    <li><b>5</b> Собеседований</li>
                  </ul>
                  <a className="signup" href="/login">Регистрация</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="plan plan4 ">
                  <div className="header">Для начинающих</div>
                  <div className="price">10000</div>
                  <div className="monthly">в месяц</div>
                  <ul>
                    <li><b>3</b> Курса</li>
                    <li><b>15</b> Лекций</li>
                    <li><b>3</b> Резюме</li>
                    <li><b>10</b> Собеседований</li>
                  </ul>
                  <a className="signup" href="http://www.freshdesignweb.com">Регистрация</a>
                </div>
              </div>
            </div>
          </div>

        </aside>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8" style={{ margin: '2rem auto' }}>
              <ul className="event-list">
                <li>
                  <time dateTime="2014-07-20">
                    <span className="day">15</span>
                    <span className="month">Июля</span>
                    <span className="year">2014</span>
                    <span className="time">ALL DAY</span>
                  </time>
                  <img
                    alt="Independence Day" src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg"
                    style={{ marginRight: '20px' }}
                  />
                  <div className="info">
                    <h2 className="title">Открытие площадки.</h2>
                    <p className="desc">День открытых дверей. </p>
                  </div>
                  <div className="social">
                    <ul>
                      <li className="facebook" style={{ width: '33%' }}><a href="#facebook"><span
                        className="fa fa-facebook"
                      ></span></a></li>
                      <li className="twitter" style={{ width: '34%' }}><a href="#twitter"><span
                        className="fa fa-twitter"
                      ></span></a></li>
                      <li className="google-plus" style={{ width: '33%' }}><a href="#google-plus"><span
                        className="fa fa-google-plus"
                      ></span></a></li>
                    </ul>
                  </div>
                </li>

                <li>
                  <time
                    dateTime="2014-07-20 0000"
                    style={{ color: 'rgb(94, 94, 94)', backgroundColor: 'rgb(255, 255, 255)' }}
                  >
                    <span className="day">8</span>
                    <span className="month">Июля</span>
                    <span className="year">2017</span>
                    <span className="time">12:00 AM</span>
                  </time>
                  <div className="info">
                    <h2 className="title">Первое занятие</h2>
                    <p className="desc">Запись на курс. Первый набор будет тестовым. </p>
                  </div>
                  <div className="social">
                    <ul>
                      <li className="facebook" style={{ width: '33%' }}><a href="#facebook"><span
                        className="fa fa-facebook"
                      ></span></a></li>
                      <li className="twitter" style={{ width: '34%' }}><a href="#twitter"><span
                        className="fa fa-twitter"
                      ></span></a></li>
                      <li className="google-plus" style={{ width: '33%' }}><a href="#google-plus"><span
                        className="fa fa-google-plus"
                      ></span></a></li>
                    </ul>
                  </div>
                </li>

                <li>
                  <time dateTime="2014-07-20 2000">
                    <span className="day">20</span>
                    <span className="month">Авг</span>
                    <span className="year">2017</span>
                    <span className="time">8:00 PM</span>
                  </time>
                  <img
                    alt="My 24th Birthday!" src="https://farm5.staticflickr.com/4150/5045502202_1d867c8a41_q.jpg"
                    style={{ marginRight: '20px' }}
                  />
                  <div className="info">
                    <h2 className="title">Первый выпуск.</h2>
                    <p className="desc">Лично проконтролируем, что вы получили работу мечты.</p>
                  </div>
                  <div className="social">
                    <ul>
                      <li className="facebook" style={{ width: '33%' }}><a href="#facebook"><span
                        className="fa fa-facebook"
                      ></span></a></li>
                      <li className="twitter" style={{ width: '34%' }}><a href="#twitter"><span
                        className="fa fa-twitter"
                      ></span></a></li>
                      <li className="google-plus" style={{ width: '33%' }}><a href="#google-plus"><span
                        className="fa fa-google-plus"
                      ></span></a></li>
                    </ul>
                  </div>
                </li>

                <li>
                  <time
                    dateTime="2014-07-31 1600"
                    style={{ color: 'rgb(94, 94, 94)', backgroundColor: 'rgb(255, 255, 255)' }}
                  >
                    <span className="day">1</span>
                    <span className="month">Сен</span>
                    <span className="year">2017</span>
                    <span className="time">4:00 PM</span>
                  </time>
                  <div className="info">
                    <h2 className="title">Презентация новых курсов.</h2>
                    <p className="desc">Откроем новые курсы. Javascript, DevOps и другие...</p>
                  </div>
                  <div className="social">
                    <ul>
                      <li className="facebook" style={{ width: '33%' }}><a href="#facebook"><span
                        className="fa fa-facebook"
                      ></span></a></li>
                      <li className="twitter" style={{ width: '34%' }}><a href="#twitter"><span
                        className="fa fa-twitter"
                      ></span></a></li>
                      <li className="google-plus" style={{ width: '33%' }}><a href="#google-plus"><span
                        className="fa fa-google-plus"
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
              <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
              <h2 className="text-white text-center text-uppercase font-weight-bold my-0">
                Нас рекомендуют
              </h2>
              <h5 className="text-center font-weight-light mt-2 mb-0 text-grey">
                Они нашли работу мечты.
              </h5>
              <hr className="mb-5 w-50 mx-auto" />
              <div className="row">
                <div className="col-md-4 d-md-flex">
                  <blockquote
                    className="blockquote-bubble blockquote-center animated fadeIn animated-done"
                    data-animate="fadeIn" data-animate-delay="0.1" style={{ animationDelay: '0.1s' }}
                  >
                    <p className="blockquote-bubble-content bg-white">"EdHunter дал мне необходимые знания для моей
                      карьеры!"</p>
                    <small className="text-grey">
                      <img
                        src="http://demos.themelize.me/appstrap3.0.6/theme/assets/img/team/jimi@2x.jpg"
                        alt="Jimi Bloggs" className="rounded-circle mr-2" width="50" height="50"
                      />
                      Наташа Брезнякова <span className="text-primary font-weight-bold">/</span> <a href="#">МФТИ
                      /
                      Сбертех</a>
                    </small>
                  </blockquote>
                </div>
                <div className="col-md-4 d-md-flex">
                  <blockquote
                    className="blockquote-bubble blockquote-center animated fadeIn animated-done"
                    data-animate="fadeIn" data-animate-delay="0.2" style={{ animationDelay: '0.1s' }}
                  >
                    <p className="blockquote-bubble-content bg-white text-center">"10 из 10, крутые
                      профессионалы"</p>
                    <small className="text-grey">
                      <img
                        src="http://demos.themelize.me/appstrap3.0.6/theme/assets/img/team/steve@2x.jpg"
                        alt="Jimi Bloggs" className="rounded-circle mr-2" width="50" height="50"
                      />
                      Саша Кравчук <span className="text-primary font-weight-bold">/</span> <a href="#">МИФИ /
                      Yandex</a>
                    </small>
                  </blockquote>
                </div>
                <div className="col-md-4 d-md-flex">
                  <blockquote
                    className="blockquote-bubble blockquote-center animated fadeIn animated-done"
                    data-animate="fadeIn" data-animate-delay="0.3" style={{ animationDelay: '0.1s' }}
                  >
                    <p className="blockquote-bubble-content bg-white text-center">"Я благодарен этой компании.
                      Обязательно сходил бы еще раз"</p>
                    <small className="text-grey">
                      <img
                        src="http://demos.themelize.me/appstrap3.0.6/theme/assets/img/team/adele@2x.jpg"
                        alt="Adele Bloggs" className="rounded-circle mr-2" width="50" height="50"
                      />
                      Максим Титов <span className="text-primary font-weight-bold">/</span> <a href="#">МГУ /
                      Luxoft</a>
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
              <h2 className="text-primary">Хотите стать партнером проекта?</h2>
              <p className="wide-space text-center text-uppercase">Партнерская программа - это возможность заработать,
                предлагая наши образовательные продукты вашей аудитории.

                Партнеры получают 20% от каждой оплаты пользователей, пришедших к нам с вашей площадки. Участники
                партнерской программы получают уникальный идентификатор, который позволяет нашей системе понять, что
                пользователь пришел от вас.

                Пишите на почту serzbv@gmail.com</p>
              <a
                href="/login-company"
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
                <hr className="primary" />
                <p>Предложите курс, или просто оставьте контакты, мы с Вами свяжемся.</p>
              </div>
              <div className="col-lg-10 offset-lg-1 text-center">
                <form className="contact-form row">
                  <div className="col-md-4">
                    <label></label>
                    <input type="text" className="form-control" placeholder="Имя" />
                  </div>
                  <div className="col-md-4">
                    <label></label>
                    <input type="text" className="form-control" placeholder="Почта" />
                  </div>
                  <div className="col-md-4">
                    <label></label>
                    <input type="text" className="form-control" placeholder="Телефон" />
                  </div>
                  <div className="col-md-12">
                    <label></label>
                    <textarea className="form-control" rows="9" placeholder="Ваше сообщение" />
                  </div>
                  <div className="col-md-4 offset-md-4">
                    <label></label>
                    <button
                      type="button" data-toggle="modal" data-target="#alertModal"
                      className="btn btn-primary btn-block btn-lg"
                    >Отправить <i
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
                <h6 className="text-uppercase">EdHunter</h6>
                <ul className="list-unstyled">
                  <li><a
                    href="https://medium.com/@bootply/bootstrap-4-whats-new-visual-guide-c84dd81d8387"
                    target="ext"
                  >Новости</a></li>
                  <li><a href="http://codeply.com/tagged/bootstrap-4" target="ext">Запись на курс</a></li>
                  <li><a href="http://getbootstrap.com" target="ext">Предложить идею</a></li>
                </ul>
              </div>
              <div className="col-6 col-sm-3 column">
                <h6 className="text-uppercase">О нас</h6>
                <ul className="list-unstyled">
                  <li><a href="#">Контакты</a></li>
                  <li><a href="#">Условия обучения</a></li>
                  <li><a href="#">Расположение офиса</a></li>
                </ul>
              </div>
              <div className="col-12 col-sm-3 column">
                <h6 className="text-uppercase">Подпишись на обновления</h6>
                <form>
                  <div className="form-group">
                    <input
                      type="text" className="form-control" title="No spam, we promise!"
                      placeholder="Введите ваш email"
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#alertModal" type="button">
                      Подписаться
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-12 col-sm-3 text-right">
                <h6 className="text-uppercase">Мы в социальных сетях</h6>
                <ul className="list-inline">
                  <li className="list-inline-item"><a rel="nofollow" href="" title="Facebook"><i
                    className="icon-lg ion-social-facebook-outline"
                  ></i></a></li>
                </ul>
              </div>
            </div>
            <br />
            <span className="float-right text-muted small"><a>EdHunter 2017</a></span>
          </div>
        </footer>
        <div id="alertModal" className="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-body text-center">
                <h2 className="text-center">Спасибо!</h2>
                <p className="text-center">Ваше мнение очень важно для нас</p>
                <br />
                <button className="btn btn-primary btn-lg" data-dismiss="modal" aria-hidden="true">ОК <i
                  className="ion-android-close"
                ></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
