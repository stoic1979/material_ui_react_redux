import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {grey500, white} from 'material-ui/styles/colors';
import styles from '../../styles';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import SelectFields from '../../components/SelectFields';
import IconTextField from '../../components/iconedtextField';
import ButtonIcon from '../../components/buttonIcon';


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
  attachButton: {
    color: grey500,
    marginTop: 70,
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

export default class CreateHelpDocument extends React.Component {
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
        <h3 style={styles.navigation}>Create Help Document
        </h3>

        <Paper style={styles.paper}>
          <Subheader>Create Help Document</Subheader>
          <form>
            <FlatButton
              label="Edit"
              href="./"
              style={style.editButton}
            />

            <div className="row">
              <div className="col-sm-8">
                <IconTextField hint=" Document Name" label="Document Name" icon="insert_drive_file" />
                <IconTextField hint="Document Description" label="Document Description" icon="description" />
              </div>
              <div className="col-sm-4">
                <ButtonIcon
                  label="Attach Document"
                  icon="attach_file"
                  style={style.attachButton}
                />
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
