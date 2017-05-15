/*
 *
 * UploadContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import makeSelectUploadContainer from './selectors';
import styles from './styles.css';
import { upload } from './actions';
export class UploadContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { errorMessage, infoMessage, fetching } = this.props.uploadContainer;
    return (
      <div>
        <Helmet
          title="Slink: upload"
          meta={[
            { name: 'description', content: 'Description of UploadContainer' },
          ]}
        />
        <AppBar title={<Link style={{ textDecoration: 'none' }} to={'/home'}><h2 >Slink</h2></Link>}>
          <Navigation type="horizontal">
          </Navigation>
        </AppBar>
        {errorMessage ? <p style={{ textAlign: 'center', color: 'red' }}>{errorMessage}</p> : null}
        {infoMessage ? <p style={{ textAlign: 'center' }}>{infoMessage}</p> : null}

        {fetching ? <ProgressBar type="linear" mode="indeterminate" theme={styles}>awdaw</ProgressBar> :
        <Dropzone
          className={styles.uploadZone}
          activeClassName={styles.uploadActiveZone}
          rejectClassName={styles.uploadRejectZone}
          onDrop={this.props.upload}
        >
          <p>Try dropping some files here, or click to select files to upload.</p>
        </Dropzone>
        }

      </div>
    );
  }
}

UploadContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  uploadContainer: makeSelectUploadContainer(),
});

const mapDispatchToProps = {
  upload,
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer);
