/*
 *
 * DemoContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectDemoContainer from './selectors';

export class DemoContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="DemoContainer"
          meta={[
            { name: 'description', content: 'Description of DemoContainer' },
          ]}
        />
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

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoContainer);
