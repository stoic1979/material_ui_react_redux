import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import strings from '../lang/lang.js';
import {grey500, white} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';


/**
 * `SelectField` supports a floating label with the `floatingLabelText` property.
 * This can be fixed in place with the `floatingLabelFixed` property,
 * and can be customised with the `floatingLabelText` property.
 */
class SelectFields extends Component {
  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const items = [
      <MenuItem key={1} value={1} primaryText={this.props.item1} />,
      <MenuItem key={2} value={2} primaryText={this.props.item2} />,
      <MenuItem key={3} value={3} primaryText={this.props.item3} />,
      <MenuItem key={4} value={4} primaryText={this.props.item4} />,
    ];
    return (
      <div className="input-group">
        <span className="input-group-icon">
          <i className="material-icons">{this.props.icon}</i>
        </span>
        <div className="input-group-text">
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            floatingLabelText={this.props.label}
            floatingLabelStyle={{color: grey500}}
            className="form-control" fullWidth={true}

          >
            {items}
          </SelectField>
        </div>
      </div>

    );
  }
}

export default SelectFields;
