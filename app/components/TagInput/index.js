/**
*
* TagInput
*
*/

import React from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'; // If using WebPack and style-loader.
import { tagRender } from './tagRender';
import styles from './styles.css';

class TagInput extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <TagsInput
        className={styles.reactTagsinput}
        value={this.props.tags}
        inputProps={{ placeholder: 'add tag...' }}
        onChange={this.props.onChangeTags}
        renderTag={tagRender}
      />
    );
  }
}

TagInput.propTypes = {

};

export default TagInput;
