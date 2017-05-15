/**
*
* FormTags
*
*/

import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css'
import { Service } from '../../service/service';

// eslint-disable-next-line new-cap
const service = new Service();

class FormTags extends React.Component { // eslint-disable-line react/prefer-stateless-function
  getTags(input) {
    if (!input) {
      return Promise.resolve({ options: [] });
    }
    return service.getTagsByName(input)
      .then((options) => ({
        options: options.map((item) => ({
          value: item.value,
          id: item.id,
        })),
      }));
  }

  render() {
    let { value, onChange, readOnly = false } = this.props;
    return (<div>
      <Select.AsyncCreatable
        multi
        disabled={readOnly}
        value={value}
        onChange={(val) => onChange(val)}
        loadOptions={this.getTags}
        backspaceRemoves
        ignoreCase
        valueKey="id"
        labelKey="value"
      />
    </div>);
  }
}

FormTags.propTypes = {

};

export default FormTags;
