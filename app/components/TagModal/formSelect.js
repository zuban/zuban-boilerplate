import React from 'react';
import Select from 'react-select';
import { List } from 'immutable';

const SelectBox = ({ input, ...props }) => {
  let { value, onBlur, onChange } = input;


  return (<Select
    multi
    value={value.toJS()}
    onChange={(values) => onChange(List(values))}
    {...props}
    valueKey="value"
    labelKey="label"
  />);
};

SelectBox.propTypes = {
  input: React.PropTypes.object.isRequired,
};

export default SelectBox;

