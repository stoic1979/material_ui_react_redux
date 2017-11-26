import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import Dialog from 'material-ui/Dialog';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  // style: {
  //   width: 150,
  // },
  ContentStyle: {
    width: '30%',
    maxWidth: 'none',
  },
};

export default class DropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event, index, value) => this.setState({value});

  state = {
    open: false,
  };


  popup_handleOpen = () => {
    this.setState({open: true});
  };

  popup_handleClose = () => {
    this.setState({open: false});
  };


  handleChange = (event, index, value) => this.setState({value});

  render() {
    const items = [
      <MenuItem key={1} value={1} primaryText={this.props.item1} onClick={this.popup_handleOpen} />,
      <MenuItem key={2} value={2} primaryText={this.props.item2} onClick={this.popup_handleOpen} />,
      <MenuItem key={3} value={3} primaryText={this.props.item3} onClick={this.popup_handleOpen} />,
      <MenuItem key={4} value={4} primaryText={this.props.item4} onClick={this.popup_handleOpen} />,
      <MenuItem key={5} value={5} primaryText={this.props.item5} onClick={this.popup_handleOpen} />,
      <MenuItem key={6} value={6} primaryText={this.props.item6} onClick={this.popup_handleOpen} />,
    ];
    const actions = [
      <FlatButton
        label="Yes"
        primary={true}
        onClick={this.popup_handleClose}
      />,
      <FlatButton
        label="No"
        primary={true}
        keyboardFocused={true}
        onClick={this.popup_handleClose}
      />,

    ];
    return (
      <div>

        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          // style={this.props.style}
          autoWidth={true}
        >
          {items}

        </DropDownMenu>

        <Dialog
          title="Alert"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={styles.ContentStyle}
        >
          Are you sure you want to delete this?
        </Dialog>
      </div>

    );
  }
}
