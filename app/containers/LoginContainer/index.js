/*
 *
 * LoginContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { Button, IconButton } from 'react-toolbox/lib/button';
import { Card } from 'react-toolbox/lib/card';

import makeSelectLoginContainer from './selectors';
import LoginHeader from '../../components/LoginHeader';
import Footer from '../../components/Footer';
import LoginForm from './loginForm';
import styles from './login.css';
import { login } from './actions';
//
// const GithubIcon = () => (
//   <svg viewBox="0 0 284 277">
//     <g>
//       <path
//         d="M141.888675,0.0234927555 C63.5359948,0.0234927555 0,63.5477395 0,141.912168 C0,204.6023 40.6554239,257.788232 97.0321356,276.549924 C104.12328,277.86336 106.726656,273.471926 106.726656,269.724287 C106.726656,266.340838 106.595077,255.16371 106.533987,243.307542 C67.0604204,251.890693 58.7310279,226.56652 58.7310279,226.56652 C52.2766299,210.166193 42.9768456,205.805304 42.9768456,205.805304 C30.1032937,196.998939 43.9472374,197.17986 43.9472374,197.17986 C58.1953153,198.180797 65.6976425,211.801527 65.6976425,211.801527 C78.35268,233.493192 98.8906827,227.222064 106.987463,223.596605 C108.260955,214.426049 111.938106,208.166669 115.995895,204.623447 C84.4804813,201.035582 51.3508808,188.869264 51.3508808,134.501475 C51.3508808,119.01045 56.8936274,106.353063 65.9701981,96.4165325 C64.4969882,92.842765 59.6403297,78.411417 67.3447241,58.8673023 C67.3447241,58.8673023 79.2596322,55.0538738 106.374213,73.4114319 C117.692318,70.2676443 129.83044,68.6910512 141.888675,68.63701 C153.94691,68.6910512 166.09443,70.2676443 177.433682,73.4114319 C204.515368,55.0538738 216.413829,58.8673023 216.413829,58.8673023 C224.13702,78.411417 219.278012,92.842765 217.804802,96.4165325 C226.902519,106.353063 232.407672,119.01045 232.407672,134.501475 C232.407672,188.998493 199.214632,200.997988 167.619331,204.510665 C172.708602,208.913848 177.243363,217.54869 177.243363,230.786433 C177.243363,249.771339 177.078889,265.050898 177.078889,269.724287 C177.078889,273.500121 179.632923,277.92445 186.825101,276.531127 C243.171268,257.748288 283.775,204.581154 283.775,141.912168 C283.775,63.5477395 220.248404,0.0234927555 141.888675,0.0234927555"
//       />
//     </g>
//   </svg>
// );
// const FacebookIcon = () => (
//   <svg
//     x="0px" y="0px" width="266.893px" height="266.895px" viewBox="0 0 266.893 266.895"
//     enableBackground="new 0 0 266.893 266.895"
//   >
//     <path
//       id="Blue_1_" fill="#3C5A99"
//       d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812  c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225  H248.082z"
//     />
//     <path
//       id="f" fill="#FFFFFF"
//       d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935  l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585  v99.803H182.409z"
//     />
//   </svg>
// );
// const TwitterIcon = () => (
//   <svg viewBox="0 0 400 400">
//     <defs>
//     </defs>
//     <title>Twitter_Logo_White-on-Blue</title>
//     <g id="Dark_Blue" data-name="Dark Blue">
//       <rect width="400" height="400" />
//     </g>
//     <g id="Logo_FIXED" data-name="Logo — FIXED">
//       <path
//         d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
//       />
//       <rect width="400" height="400" />
//     </g>
//   </svg>
// );

export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onSubmitLogin(formArgs) {
    this.props.login(formArgs.get('username'), formArgs.get('password'));
  }

  render() {
    const { loginErrorMessage, infoMessage } = this.props.loginContainer;

    return (
      <div>
        <Helmet
          title="LoginContainer"
          meta={[
            { name: 'description', content: 'Description of LoginContainer' },
          ]}
        />
        <LoginHeader />
        <Card className={styles.loginForm}>
          <Button
            label="SIGN IN WITH FACEBOOK"
            raised
            primary
          />
          <h3
            style={{ textAlign: 'center' }}
            className={styles.loginHeader}
          >or</h3>

          {loginErrorMessage ? <h3 style={{ color: 'red', fontWeight: 'normal', margin: '0' }}>{loginErrorMessage}</h3> : null}

          <LoginForm onSubmit={(formArgs) => this.onSubmitLogin(formArgs)} />
        </Card>
        <Footer />
      </div>
    );
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginContainer: makeSelectLoginContainer(),
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
