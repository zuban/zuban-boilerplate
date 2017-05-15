/*
 *
 * FilesContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import Dialog from 'react-toolbox/lib/dialog';
import { makeSelectFilesContainer, makeSelectGlobal } from './selectors';

import Footer from '../../components/Footer';
import Tags from '../../components/Tags';
import Toolbar from '../../components/Toolbar';
import Documents from '../../components/Documents';
import TagInput from '../../components/TagInput';
import ModalDocument from '../../components/ModalDocument';

import { init, changeTags, addTag, chageText, toggleModal } from './actions';
export class FilesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.init();
  }

  render() {
    const { documentsFetching, documents, tagsFetching, tags, selectedTags, isModalOpen } = this.props.filesContainer;
    const { userName, userId } = this.props.global;
    return (
      <div>
        <Helmet
          title="Slink: pages"
          meta={[
            { name: 'description', content: 'Description of FilesContainer' },
          ]}
        />
        <div className="row">
          <Tags userName={userName} userId={userId} selectTag={this.props.addTag} tagsFetching={tagsFetching} tags={tags} />
          <div
            style={{ height: '100vh', paddingRight: '0rem', paddingLeft: '0rem' }}
            className="col-xs-12 col-sm-9 col-md-10 col-lg-10"
          >
            <Toolbar onChageText={this.props.chageText} />
            <TagInput tags={selectedTags} onChangeTags={this.props.changeTags} />
            <Documents
              openDocument={this.props.toggleModal}
              documentsFetching={documentsFetching}
              documents={documents}
            />
          </div>
        </div>

        <ModalDocument isModalOpen={isModalOpen} handleModalToggle={this.props.toggleModal}/>
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
  global: makeSelectGlobal(),
});
const mapDispatchToProps = {
  init,
  addTag,
  changeTags,
  chageText,
  toggleModal,
};
export default connect(mapStateToProps, mapDispatchToProps)(FilesContainer);
