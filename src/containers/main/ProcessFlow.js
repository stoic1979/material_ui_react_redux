import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Slider from 'material-ui/Slider';
import Divider from 'material-ui/Divider';
import {grey500, white} from 'material-ui/styles/colors';
import styles from '../../styles';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectFields from '../../components/SelectFields';
import IconTextField from '../../components/iconedtextField';
import TextIconField from '../../components/TextIconField';
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
    float: 'right',
  },
};

export default class ProcessFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSlider: 0.5,
      secondSlider: 50,
      value: 1,
      performed_by: '',
      step_1: '',
      step_2: '',
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
    const {performed_by, step_1, step_2} = this.state;
    return (
      <div>
        <h3 style={styles.navigation}> Process Flow</h3>
        <Paper style={styles.paper}>
          <Subheader>Process Flow</Subheader>
          <form>
            <ButtonIcon
              label="Attach Document"
              icon="attach_file"
              style={style.attachButton}
            />
            <TextIconField hint="Performed by" label="Performed by" icon="account_circle" tooltip="performed by" name="performed_by" value={performed_by} />
            <TextIconField hint="Task" label="Step 1" icon="delete" tooltip="Delete" name="step_1" value={step_1} />
            <TextIconField hint="Task" label="Step 2" icon="delete" tooltip="Delete" name="step_2" value={step_2} />
            <IconButton tooltip="Add Task">
              <i className="material-icons">add_circle</i>
            </IconButton>
            <div className="card-footer displayNone" style={style.footer}>
              <div style={style.buttonsDiv}>
                <FlatButton
                  label="Save and Finish"
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
