import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {grey500, white} from 'material-ui/styles/colors';
import styles from '../../styles';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import SelectFields from '../../components/SelectFields';
import IconTextField from '../../components/iconedtextField';
import DatePicker from '../../components/datePicker';


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

export default class CreateCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSlider: 0.5,
      secondSlider: 50,
      value: 1,
      company_name: '',
      primary_contact: '',
      email_1: '',
      city: '',
      address: '',
      date_entered: '',
      secondary_contact: '',
      email_2: '',
      state: '',
      zip: '',
      expiration_date: '',

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
    const {company_name, primary_contact, email_1, city, address, date_entered, secondary_contact, email_2, state, zip, expiration_date} = this.state;

    return (
      <div>
        <h3 style={styles.navigation}>Create Company
        </h3>

        <Paper style={styles.paper}>
          <Subheader>Create Company</Subheader>
          <form>
            <FlatButton
              label="Edit"
              href="./"
              style={style.editButton}
            />
            <div className="row">
              <IconTextField hint="Company Name" label="Company Name" icon="business" name="company_name" value={company_name} />
              <div className="col-sm-6">
                <IconTextField hint="Primary Contact" label="Primary contact" icon="call" name="primary_contact" value={primary_contact} />
                <IconTextField hint="Email 1" label="Email 1" icon="email" name="email_1" value={email_1} />
                <IconTextField hint="City" label="City" icon="location_city" name="city" value={city} />
                <IconTextField hint="Address" label="Address" icon="portrait" name="address" value={address} />
                <DatePicker   icon="date_range" name="date_entered" value={date_entered} />

              </div>
              <div className="col-sm-6">

                <IconTextField hint="secondary Contact " label="Secondary Contact " icon="call" name="secondary_contact" value={secondary_contact} />
                <IconTextField hint="Email 2" label="Email 2" icon="email" name="email_2" value={email_2} />
                <IconTextField hint="State" label="State" icon="room" name="state" value={state} />
                <IconTextField hint="Zip Code" label="Zip Code" icon="keyboard" name="zip" value={zip} />
                <DatePicker   icon="date_range" name="expiration_date" value={expiration_date} />

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
