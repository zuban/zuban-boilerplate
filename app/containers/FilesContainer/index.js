/*
 *
 * FilesContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import makeSelectFilesContainer from './selectors';

import Footer from '../../components/Footer';
import Tags from '../../components/Tags';
import Toolbar from '../../components/Toolbar';
import Documents from '../../components/Documents';
import TagInput from '../../components/TagInput';

import { init, changeTags, addTag } from './actions';
export class FilesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.init();
  }

  render() {
    const { documentsFetching, documents, tagsFetching, tags, selectedTags } = this.props.filesContainer;
    return (
      <div>
        <Helmet
          title="FilesContainer"
          meta={[
            { name: 'description', content: 'Description of FilesContainer' },
          ]}
        />
        <div className="row">
          <Tags selectTag={this.props.addTag} tagsFetching={tagsFetching} tags={tags} />
          <div
            style={{ height: '100vh', paddingRight: '0rem', paddingLeft: '0rem' }}
            className="col-xs-12 col-sm-9 col-md-10 col-lg-10"
          >
            <Toolbar />
            <TagInput tags={selectedTags} onChangeTags={this.props.changeTags} />
            <Documents
              documentsFetching={documentsFetching}
              documents={documents}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

FilesContainer.propTypes = {
  init: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  filesContainer: makeSelectFilesContainer(),
});
const mapDispatchToProps = {
  init,
  addTag,
  changeTags,
};
export default connect(mapStateToProps, mapDispatchToProps)(FilesContainer);
