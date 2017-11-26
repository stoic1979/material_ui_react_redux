import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

const TextIconField = function statelessFunctionComponentClass(props) {
  return (
    <div className="input-group">

      <div className="input-group-text">
        <TextField
          hintText={`${props.hint}`}
          floatingLabelText={`${props.label}`}

          className="form-control" fullWidth={true}
        />
      </div>
      <span className="input-group-icon">
        <IconButton tooltip={`${props.tooltip}`}>
          <i className="material-icons">{props.icon}</i>
        </IconButton>
      </span>
    </div>
  );
};

export default TextIconField;
