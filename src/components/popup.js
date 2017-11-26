import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import ContentCreate from 'material-ui/svg-icons/content/create';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


const styles = {

  editButton: {
    fill: grey500,
  },
  raisedBtn: {
    color: grey500,
    marginBottom: 15,
  },

  customContentStyle: {
    width: '12%',
    height: 'auto',
    maxWidth: 'none',
  },

};

/**
 * Dialog content can be scrollable.
 */
export default class PopUp extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />,

    ];


    return (
      <div>
        <FloatingActionButton
          zDepth={0}
          mini={true}
          backgroundColor={grey200}
          style={this.props.style}
          iconStyle={styles.editButton}
          icon={<i className="material-icons">{this.props.icon}</i>}
          onClick={this.handleOpen}
        >
          <ContentCreate />
        </FloatingActionButton>

        <Dialog
          title=""
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          contentStyle={styles.customContentStyle}
        >
          <RaisedButton
            label="Edit"
            default={true}
            style={styles.raisedBtn}


          />

          <RaisedButton
            label="Delete"
            default={true}
            style={styles.raisedBtn}

          />

        </Dialog>
      </div>
    );
  }
}


