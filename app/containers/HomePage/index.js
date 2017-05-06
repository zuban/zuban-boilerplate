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

import { Jumbotron, Button, Container } from 'reactstrap';

// components
import Header from '../../components/Header';

// import styles
import style from './home.css';
export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <Container className={style.jumbCont}>
          <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
