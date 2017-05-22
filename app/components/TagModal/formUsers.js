/**
 * Created by sergeyzubov on 18/03/2017.
 */
import React, { Component } from 'react';
import Select from 'react-select';
import { List } from 'immutable';
import { Service } from '../../service/service';

// eslint-disable-next-line new-cap
const service = new Service();

class Users extends Component {
  getUsers(input) {
    if (!input) {
      return Promise.resolve({ options: [] });
    }
    return service.getUserByEmail(input)
      .then((options) => ({
        options: [{
          label: options.email,
          value: options.id,
          meta: options,
        }],
      }));
  }

  render() {
    let { value, onChange } = this.props.input;

    return (<div>
      <Select.Async
        multi
        value={value.toJS()}
        onChange={(values) => onChange(List(values))}
        loadOptions={this.getUsers}
        backspaceRemoves
        valueKey="value"
        labelKey="label"
      />
    </div>);
  }
}

Users.propTypes = {
  input: React.PropTypes.object.isRequired,
};

export default Users;
