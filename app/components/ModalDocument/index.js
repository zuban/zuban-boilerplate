/**
*
* ModalDocument
*
*/

import React from 'react';
// import styled from 'styled-components';
import Dialog from 'react-toolbox/lib/dialog';
import { Card } from 'react-toolbox/lib/card';
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styles from './styles.css';

class ModalDocument extends React.Component { // eslint-disable-line react/prefer-stateless-function

  actions = [
    { label: 'Cancel', onClick: this.handleModalToggle },
    { label: 'Save', onClick: this.handleToggle },
  ];

  render() {
    return (
      <Dialog
        theme={styles}
        actions={this.actions}
        active={this.props.isModalOpen}
        onEscKeyDown={this.props.handleModalToggle}
        onOverlayClick={this.props.handleModalToggle}
        title="Document Viewer"
      >
        <div className="row">
          <div className="col-sm-6">
            <Card>
              <img width="100%" alt="Card image cap" />
            </Card>
          </div>
          <div className="col-sm-6">awdawd</div>
        </div>
      </Dialog>
    );
  }
}

ModalDocument.propTypes = {

};

export default ModalDocument;
