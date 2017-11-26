import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import strings from '../lang/lang.js';
import {grey500, white} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';


class datePicker extends Component {


  render() {
    return (
      <div className="input-group">
        <span className="input-group-icon">
          <i className="material-icons">{this.props.icon}</i>
        </span>
        <div className="input-group-text">
          <DatePicker
            hintText="Expiration Date"
            floatingLabelText={this.props.value}
            floatingLabelStyle={{color: grey500}}
            className="form-control" fullWidth={true}
          />
        </div>
      </div>

    );
  }
}

export default datePicker;
