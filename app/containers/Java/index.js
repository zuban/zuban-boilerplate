/*
 *
 * Java
 *
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import css from './styles.css';
import matorin from '../HomePage/matorin.jpg';
export class Java extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{height: '100%'}}>
        <nav id="topNav" className="navbar fixed-top navbar-toggleable-sm">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
              <span>☰</span>
            </button>
            <a className="navbar-brand page-scroll" href="/">EdHunter</a>
            <div className="collapse navbar-collapse" id="collapsingNavbar">
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
        <section id="team" className="bg-light-gray bg-inverse edhunter-mission" style={{color: '#fff'}}>

          <div className="container mission-section">
            <header className="page-header-java" style={{background: 'none'}}>
              <h1 className="text-primary">Курс: Платформа Java</h1>
              <h3>Продолжительность: 5 месяцев, 2 занятия в неделю</h3>
              <h3>Необходимое время в неделю: по 4 академических часа на занятия и на домашнюю работу
              </h3>
              <p>Данный курс предназначен для тех, кто хочет сделать Java своим основным языком. В начале курса коротко
                рассматриваются основные концепции и синтаксические особенности языка и далее разбираются уже сложные и
                интересные возможности платформы Java. Во второй части курса рассматриваются библиотеки и фреймворки,
                используемые для создания крупных проектов (Spring, Hibernate, etc).
              </p>
              <p> В течение курса мы будем обращать особое внимание на те вопросы и особенности языка, которые
                критически важно понимать для создания качественного ПО. Знания этих же тем чаще всего проверяют на
                собеседованиях на позицию Java разработчик.
              </p>
              <p> Основная цель данного курса не просто научить вас писать на Java, но объяснить, что значит писать
                красивый поддерживаемый код. Для этого нужно быть уверенным, что вы правильно используете синтаксические
                конструкции языка, глубоко понимаете семантику этих конструкций, выбираете оптимальные библиотеки и
                фреймворки для решения задачи, и ваш код соответствует принципам объектно-ориентировочного дизайна.
              </p>
              <p> После каждого домашнего задания вам будет даваться фидбек, что, почему и как можно улучшить. Со
                временем у вас выработается “чувство прекрасного” при написании кода и понимание, что такое хороший код.
              </p>
              <p> Помимо самого языка в курс включены следующие модули: алгоритмы и структуры данных, оценка
                алгоритмической сложности, тестирование кода, паттерны проектирования, работа с базами данных, SQL, web
                ui, работа с git, методология разработки ПО, эффективная работа с IDE IntelliJ IDEA.
              </p>
              <h3>Требования к студентам:</h3>
              <p>Знание основ любого объектно-ориентированного языка, успешно сданный вступительный тест.</p>


                <div className="team-member row">
                  <div className="col-sm-4">
                  <img
                    style={{
                      borderRadius: '50%',
                      display: 'block',
                      margin: '0 auto',
                      border: '7px solid rgb(2, 117, 216)',
                      position: 'absolute',
                      top: '70px'
                    }}
                    src={matorin}
                    className="img-responsive img-circle" alt=""
                  />
                  </div>
                  <div className="col-sm-8">
                  <h4 style={{marginTop: '20px', textAlign: 'center'}}>Александр Маторин</h4>
                  <p className="section-heading text-primary text-center">Преподаватель</p>
                  <p style={{fontWeight: '300'}}>Закончил Саратовский государственный университет им. Н.Г. Чернышевского, факультет компьютерных наук и информационных технологий по специальности “компьютерная безопасность” в 2010 году.
                    Имеет 9 лет опыта коммерческой разработки ПО на Java. Работает в компании "Сбербанк-Технологии" в должности главного руководителя разработки. Отвечает за техническую сторону систем управления рисками на финансовых рынках.
                    Преподает в магистратуре МФТИ курсы по Java и по распределённым системам. Постоянный участник и спикер на крупнейших российских и международных Java конференциях (JPoint, Joker, JBreak, JEEConf, JavaOne).

                  </p>
                  </div>
                </div>
            </header>

          </div>
          <div className="container">

            <ul className="timeline">
              <li>
                <div className="tldate">Sprint 1</div>
              </li>
              <li>
                <div className="tl-circ"></div>
                <div className="timeline-panel">
                  <div className="tl-heading">
                    <h4>Обзор платформы Java</h4>
                    <p>
                      <small className="text-muted">
                        <i className="glyphicon glyphicon-time"></i> 6 часов
                      </small>
                    </p>
                  </div>
                  <div style={{color: 'black'}} className="tl-body">
                    <ul className="list-group">
                      <li className="list-group-item">Знакомство с платформой Java, Установка окружения, изучение
                        основных синтаксических конструкций языка.
                      </li>
                      <li className="list-group-item">Компиляция и запуск с командной строки. Понятие пакета.</li>
                      <li className="list-group-item">Установить Idea, JDK.</li>
                      <li className="list-group-item">Создать проект на github.</li>
                      <li className="list-group-item">Решить 15 задач на сайте с автоматической проверкой решения на
                        основы синтаксиса.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="tldate">Sprint 2</div>
              </li>
              <li className="timeline-inverted">
                <div className="tl-circ"></div>
                <div className="timeline-panel">
                  <div className="tl-heading">
                    <h4>Классы в Java</h4>
                    <p>
                      <small className="text-muted"><i className="glyphicon glyphicon-time"></i> 12 часов</small>
                    </p>
                  </div>
                  <div style={{color: 'black'}} className="tl-body">
                    <ul className="list-group">
                      <li className="list-group-item">Верхнеуровневые и внутренние классы, static классы</li>
                      <li className="list-group-item">Наследование, полиморфизм, инкапсуляция</li>
                      <li className="list-group-item">Конструкторы, модификаторы доступа.</li>
                      <li className="list-group-item">Пакеты lang, util, io. Свои пакеты.</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="tldate">Sprint 3</div>
              </li>
              <li>
                <div className="tl-circ"></div>
                <div className="timeline-panel">
                  <div className="tl-heading">
                    <h4>Структуры данных в Java</h4>
                    <p>
                      <small className="text-muted"><i className="glyphicon glyphicon-time"></i> 18 часов</small>
                    </p>
                  </div>
                  <div style={{color: 'black'}} className="tl-body">
                    <ul className="list-group">
                      <li className="list-group-item">Основные интерфейсы коллекций и их реализации.</li>
                      <li className="list-group-item">Детали реализаций коллекций, Оценка сложности основных операций.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="tldate">Sprint 4</div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-panel">
                  <div className="tl-heading">
                    <h4>Сборка проекта, тестирование</h4>
                    <p>
                      <small className="text-muted"><i className="glyphicon glyphicon-time"></i> 4 часа</small>
                    </p>
                  </div>
                  <div style={{color: 'black'}} className="tl-body">
                    <ul className="list-group">
                      <li className="list-group-item">Maven
                      </li>
                      <li className="list-group-item">Подключение зависимостей
                      </li>
                      <li className="list-group-item">Тестирование с помощью JUnit

                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="tldate">Sprint 5</div>
              </li>
              <li>
                <div className="tl-circ"></div>
                <div className="timeline-panel">
                  <div className="tl-heading">
                    <h4>Обработка исключений.</h4>
                    <p>
                      <small className="text-muted"><i className="glyphicon glyphicon-time"></i> 18 часов</small>
                    </p>
                  </div>
                  <div style={{color: 'black'}} className="tl-body">
                    <ul className="list-group">
                      <li className="list-group-item">Иерархия исключений. Checked и runtime исключения.
                      </li>
                      <li className="list-group-item">Конструкция try-catch-finally.</li>
                      <li className="list-group-item">Правильное закрытие ресурсов.</li>
                      <li className="list-group-item">Использование своих исключений.

                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="tldate">Sprint 6</div>
              </li>
              <li className="timeline-inverted">
                <div className="tl-circ"></div>
                <div className="timeline-panel">
                  <div className="tl-heading">
                    <h4>Generics
                    </h4>
                    <p>
                      <small className="text-muted"><i className="glyphicon glyphicon-time"></i> 6 часов</small>
                    </p>
                  </div>
                  <div style={{color: 'black'}} className="tl-body">
                    <ul className="list-group">
                      <li className="list-group-item">Параметризация классов, методов, переменных
                      </li>
                      <li className="list-group-item">Границы дженериков T extends
                      </li>
                      <li className="list-group-item">Wildcards. ? extends, ? super
                      </li>
                      <li className="list-group-item">Type erasure
                      </li>
                      <li className="list-group-item">Гибкое API с дженериками.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="tldate">Sprint 7</div>
              </li>
              <li>
                <div className="tl-circ"></div>
                <div className="timeline-panel">
                  <div className="tl-heading">
                    <h4>Reflection</h4>
                    <p>
                      <small className="text-muted"><i className="glyphicon glyphicon-time"></i> 18 часов</small>
                    </p>
                  </div>
                  <div style={{color: 'black'}} className="tl-body">
                    <ul className="list-group">
                      <li className="list-group-item">Пакет java.lang.reflect</li>
                      <li className="list-group-item">Класс Class{'<T>'} </li>
                      <li className="list-group-item">Получение информации о классе, полях, методах.</li>
                      <li className="list-group-item">Вызовы методов, изменение полей.</li>
                      <li className="list-group-item">Создание прокси объектов.</li>
                      <li className="list-group-item">Использование Аннотаций</li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <div className="tldate">Sprint 8</div>
              </li>
              <li className="timeline-inverted">
                <div className="tl-circ"></div>
                <div className="timeline-panel">
                  <div className="tl-heading">
                    <h4>Загрузка классов

                    </h4>
                    <p>
                      <small className="text-muted"><i className="glyphicon glyphicon-time"></i> 6 часов</small>
                    </p>
                  </div>
                  <div style={{color: 'black'}} className="tl-body">
                    <ul className="list-group">
                      <li className="list-group-item">Класслоадеры, их иерархия, модель делегации
                      </li>
                      <li className="list-group-item">Использование своих класслоадеров
                      </li>
                      <li className="list-group-item">Типичные исключения при загрузке классов
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <div className="tldate">Sprint 9</div>
              </li>
              <li>
                <div className="tl-circ"></div>
                <div className="timeline-panel">
                  <div className="tl-heading">
                    <h4>Java 8</h4>
                    <p>
                      <small className="text-muted"><i className="glyphicon glyphicon-time"></i> 18 часов</small>
                    </p>
                  </div>
                  <div style={{color: 'black'}} className="tl-body">
                    <ul className="list-group">
                      <li className="list-group-item">Дефолтные методы</li>
                      <li className="list-group-item">Лямбды</li>
                      <li className="list-group-item">stream api</li>
                      <li className="list-group-item">функциональное программирование</li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <div className="tldate">Sprint 10</div>
              </li>
              <li className="timeline-inverted">
                <div className="tl-circ"></div>
                <div className="timeline-panel">
                  <div className="tl-heading">
                    <h4>Введение в многопоточность</h4>
                    <p>
                      <small className="text-muted"><i className="glyphicon glyphicon-time"></i> 6 часов</small>
                    </p>
                  </div>
                  <div style={{color: 'black'}} className="tl-body">
                    <ul className="list-group">
                      <li className="list-group-item">Создание и запуск потоков
                      </li>
                      <li className="list-group-item">Демон потоки
                      </li>
                      <li className="list-group-item">Состояния потока
                      </li>
                      <li className="list-group-item">join и sleep методы
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="tldate">Sprint 11</div>
              </li>
              <li>
                <div className="tl-circ"></div>
                <div className="timeline-panel">
                  <div className="tl-heading">
                    <h4>Java memory model
                    </h4>
                    <p>
                      <small className="text-muted"><i className="glyphicon glyphicon-time"></i> 18 часов</small>
                    </p>
                  </div>
                  <div style={{color: 'black'}} className="tl-body">
                    <ul className="list-group">
                      <li className="list-group-item">Понятие happens before</li>
                      <li className="list-group-item">Reordering, visiblity</li>
                      <li className="list-group-item">Семантика volatile, synchronized, final</li>
                      <li className="list-group-item">double check locking</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="tldate">Sprint 12</div>
              </li>
              <li className="timeline-inverted">
                <div className="tl-circ"></div>
                <div className="timeline-panel">
                  <div className="tl-heading">
                    <h4>Пакет java.util.concurrent</h4>
                    <p>
                      <small className="text-muted"><i className="glyphicon glyphicon-time"></i> 6 часов</small>
                    </p>
                  </div>
                  <div style={{color: 'black'}} className="tl-body">
                    <ul className="list-group">
                      <li className="list-group-item">thread pools</li>
                      <li className="list-group-item">locks</li>
                      <li className="list-group-item">atomics</li>
                      <li className="list-group-item">concurrent data structures</li>
                      <li className="list-group-item">futures</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="tldate">Sprint 13</div>
              </li>
              <li>
                <div className="tl-circ"></div>
                <div className="timeline-panel">
                  <div className="tl-heading">
                    <h4>Сериализация
                    </h4>
                    <p>
                      <small className="text-muted"><i className="glyphicon glyphicon-time"></i> 18 часов</small>
                    </p>
                  </div>
                  <div style={{color: 'black'}} className="tl-body">
                    <ul className="list-group">
                      <li className="list-group-item">Serializable, Externalizable интерфейсы</li>
                      <li className="list-group-item">Версии классов</li>
                      <li className="list-group-item">Десериализация</li>
                      <li className="list-group-item">Типичные исключения при сериализации/десериализации</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="tldate">Sprint 14</div>
              </li>
              <li className="timeline-inverted">
                <div className="tl-circ"></div>
                <div className="timeline-panel">
                  <div className="tl-heading">
                    <h4>JVM</h4>
                    <p>
                      <small className="text-muted"><i className="glyphicon glyphicon-time"></i> 6 часов</small>
                    </p>
                  </div>
                  <div style={{color: 'black'}} className="tl-body">
                    <ul className="list-group">
                      <li className="list-group-item">Оптимизации JIT.</li>
                      <li className="list-group-item">Алгоритмы GC</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="container mission-section">
            <header className="page-header-java" style={{background: 'none'}}>
              <h3>Часть 2. Enterpise</h3>
              <p>Паттерны проектирования
                JDBC
                Hibernate
                Spring framework. DI, JDBC, ORM, Web MVC
                Web UI. Java Script
              </p>

              <a href="/login" className="btn btn-primary-outline btn-xl page-scroll wow fadeInUp m-t-3">Я хочу стать
                разработчиком</a>
            </header>

          </div>
        </section>
      </div>
    );
  }
}

Java.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Java);
