/**
 *
 * ModalDocument
 *
 */

import React from 'react';
// import styled from 'styled-components';
import Dialog from 'react-toolbox/lib/dialog';
import { Card } from 'react-toolbox/lib/card';
import { Editor } from 'react-draft-wysiwyg';
import styles from './styles.css';
import FormTags from '../../components/FormTags';
import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
class ModalDocument extends React.Component { // eslint-disable-line react/prefer-stateless-function


  constructor(...props) {
    super(...props);
    this.state = {
      editorState: null,
    };
  }

  componentWillReceiveProps(nextProps) {

    if (!nextProps.modalFetching && this.props.modalFetching) {
      const defaultContentState = convertFromHTML(nextProps.modalEditorState ? nextProps.modalEditorState : '');
      const content = ContentState.createFromBlockArray(
        defaultContentState.contentBlocks,
        defaultContentState.entityMap
      );
      const editorState = EditorState.createWithContent(content);

      this.setState({
        editorState,
      });
    }
  }

  actions = [
    { label: 'Cancel', onClick: this.props.handleModalToggle },
    { label: 'Delete document', onClick: this.props.deleteDocument },
    { label: 'Save', onClick: () => this.props.saveDocument(stateToHTML(this.state.editorState.getCurrentContent())) },
  ];

  readOnlyActions = [
    { label: 'Cancel', onClick: this.props.handleModalToggle },
  ];

  render() {
    const {
      isModalOpen,
      modalFetching,
      modalFileName,
      modalHashTags,
      modalId,
      modalOriginalContent,
      modalOwner,
      handleModalToggle,
      userId
    } = this.props;

    let readOnly = false;
    if (modalOwner) {
      readOnly = modalOwner.id != userId;
    }
    return (
      <Dialog
        theme={styles}
        actions={readOnly ? this.readOnlyActions: this.actions}
        active={isModalOpen}
        onEscKeyDown={handleModalToggle}
        onOverlayClick={handleModalToggle}
        title="Document Viewer"
      >
        {modalFetching ? 'Loading...' :
        <div className="row">
          <div className="col-sm-6">
            <Card>
              <img width="100%" src={`hw/services/files/svg/${modalId}/content.svg`} alt="document" />
            </Card>
          </div>
          <div className="col-sm-6">
            <div>
              <h3>{modalFileName}</h3>
              <p>{`Upload by: ${modalOwner.userName}`}</p>
              <FormTags
                readOnly={readOnly} value={modalHashTags}
                onChange={(tags) => this.props.onChangeModalTags(tags)}
              />
              <Editor
                readOnly={readOnly}
                editorState={this.state.editorState}
                onEditorStateChange={(state) => this.setState({
                  editorState: state,
                })}
              />
              <div
                contentEditable={false}
                style={{ fontSize: '80%', fontWeight: '400' }}
                dangerouslySetInnerHTML={{ __html: modalOriginalContent }}
              />
            </div>
          </div>
        </div>}

      </Dialog>
    );
  }
}

ModalDocument.propTypes = {};

export default ModalDocument;
