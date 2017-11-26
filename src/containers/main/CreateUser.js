import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {grey500, white} from 'material-ui/styles/colors';
import styles from '../../styles';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectFields from '../../components/SelectFields';
import IconTextField from '../../components/iconedtextField';
import TextIconField from '../../components/TextIconField';
import IconPasswordField from '../../components/iconedPasswordField';


const style = {
  editButton: {
    color: grey500,
    float: 'right',
    marginRight: 20,
  },
  buttonsDiv: {
    textAlign: 'center',
    padding: 10,
  },
  flatButton: {
    color: grey500,
  },
  checkRemember: {
    style: {
      marginTop: 40,
      maxWidth: 180,
      paddingTop: 5,
    },
    labelStyle: {
      color: grey500,
    },
    iconStyle: {
      color: grey500,
      borderColor: grey500,
      fill: grey500,
    },
  },
};

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSlider: 0.5,
      secondSlider: 50,
      value: 1,
    };
  }
  handleFirstSlider(event, value) {
    this.setState({firstSlider: value});
  }

  handleSecondSlider(event, value) {
    this.setState({secondSlider: value});
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    return (
      <div>
        <h3 style={styles.navigation}>Create User
        </h3>

        <Paper style={styles.paper}>
          <Subheader>Create User</Subheader>
          <form>
            <FlatButton
              label="Edit"
              href="./"
              style={style.editButton}
            />
            <div className="row">
              <div className="col-sm-6">

                <IconTextField hint=" First Name" label="First Name" icon="perm_identity" />
                <IconTextField hint="User Name" label="User Name" icon="account_circle" />
                <IconTextField hint="Email" label="Email" icon="email" />
                <IconPasswordField hint="Password" label="Password" icon="https" />

              </div>
              <div className="col-sm-6">

                <IconTextField hint="Last Name" label="Last Name" icon="perm_identity" />
                <SelectFields  label="Security Level" icon="security" item1="Full Access" item2="Limited Access" />


                <Checkbox
                  label="Primary Contact"
                  style={style.checkRemember.style}
                  labelStyle={style.checkRemember.labelStyle}
                  iconStyle={style.checkRemember.iconStyle}
                />
                <IconPasswordField hint="Confirm Password" label="Confirm Password" icon="https" />
              </div>
            </div>
            <div className="card-footer displayNone" style={style.footer}>
              <div style={style.buttonsDiv}>
                <FlatButton
                  label="Save"
                  href="./"
                  style={style.flatButton}
                />

                <FlatButton
                  label="Cancel"
                  href="./"
                  style={style.flatButton}
                />
              </div>
            </div>


          </form>
        </Paper>

      </div>
    );
  }
}
