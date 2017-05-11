/**
 * Created by sergeyzubov on 24/03/2017.
 */
import React from 'react';
import Chip from 'react-toolbox/lib/chip';
export const tagRender = (props) => {
  let { tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other } = props;
  return (
    <Chip key={key} {...other} deletable onDeleteClick={(e) => onRemove(key)}>
      {`#${getTagDisplayValue(tag.value)}`}
    </Chip>
  );
};
