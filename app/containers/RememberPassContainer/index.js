/*
 *
 * RememberPassContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectRememberPassContainer from './selectors';
import LoginHeader from '../../components/LoginHeader';
import Footer from '../../components/Footer';
import RememberForm from './rememberForm';
export class RememberPassContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="RememberPassContainer"
          meta={[
            { name: 'description', content: 'Description of RememberPassContainer' },
          ]}
        />
        <LoginHeader />
        <RememberForm />
        <Footer />
      </div>
    );
  }
}

RememberPassContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  RememberPassContainer: makeSelectRememberPassContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RememberPassContainer);
