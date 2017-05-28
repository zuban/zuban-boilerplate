/**
*
* TagModal
*
*/

import React from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import TagModalForm from './tagModalForm';
import styles from './styles.css';
class TagModal extends React.Component { // eslint-disable-line react/prefer-stateless-function

  actions = [
    { label: 'Cancel', onClick: this.props.toggleTagModal },
    { label: 'Delete tag', onClick: this.props.deleteTag },
  ];

  render() {
    const {
      isTagModalOpen,
      tagModalFetching,
      toggleTagModal,

      tagModalTag,
      tagModalDocuments,

      saveTagModal,
    } = this.props;

    return (
      <Dialog
        theme={styles}
        actions={this.actions}
        active={isTagModalOpen}
        onEscKeyDown={toggleTagModal}
        onOverlayClick={toggleTagModal}
        title="Edit tag"
      >
        {tagModalFetching ? 'Loading...' :
        <div className="row">
          <TagModalForm
            modalTagName={tagModalTag.title}
            modalTagDescription={tagModalTag.description}
            modalSelectedFiles={tagModalTag.modalSelectedFiles}
            modalUsers={tagModalTag.users}
            modalFiles={tagModalDocuments}
            onSubmit={(formArgs) => saveTagModal(formArgs)}
          />
        </div>}

      </Dialog>
    );
  }
}

TagModal.propTypes = {

};

export default TagModal;
