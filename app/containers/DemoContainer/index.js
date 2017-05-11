/*
 *
 * DemoContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import makeSelectDemoContainer from './selectors';
import { login } from './actions';
export class DemoContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.login('demo@', 'demo');
  }
  render() {
    return (
      <div>
        <Helmet
          title="DemoContainer"
          meta={[
            { name: 'description', content: 'Description of DemoContainer' },
          ]}
        />
        <h3 style={{textAlign: 'center'}}>Setup your workspace</h3>
        <div style={{textAlign: 'center'}}>
        <ProgressBar type="circular" mode="indeterminate" />
        </div>
      </div>
    );
  }
}

DemoContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  DemoContainer: makeSelectDemoContainer(),
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoContainer);
