import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {grey500, white} from 'material-ui/styles/colors';


const styles = {

  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const ButtonIcon = function statelessFunctionComponentClass(props) {
  return (


    <FlatButton
      label={props.label}
      labelPosition="before"
      style={props.style}
      containerElement="label"
      icon={<i className="material-icons">{props.icon}</i>}
    >
      <input type="file" style={styles.uploadInput} />
    </FlatButton>
  );
};

export default ButtonIcon;
