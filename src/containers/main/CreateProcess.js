import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {grey500, white} from 'material-ui/styles/colors';
import styles from '../../styles';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import SelectFields from '../../components/SelectFields';
import IconTextField from '../../components/iconedtextField';

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
};

export default class CreateProcess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSlider: 0.5,
      secondSlider: 50,
      value: 1,
      process_name: '',
      type_id: '',
      method: '',
      method_description: '',
      action_id: '',
      process_input: '',
      process_source: '',
      process_owner: '',
      process_description: '',
      process_output: '',
      process_consumer: '',

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
    const {process_name, type_id, method, method_description, action_id, process_source, process_owner, process_description, process_output, process_consumer, process_input} = this.state;
    return (
      <div>
        <h3 style={styles.navigation}>Create Process
        </h3>

        <Paper style={styles.paper}>
          <Subheader>Create Process</Subheader>
          <form>
            <FlatButton
              label="Edit"
              href="./"
              style={style.editButton}
            />

            <div className="row">
              <div className="col-sm-6">
                <IconTextField hint="Process Name" label="Process Name" icon="extension" name="process_name" value={process_name} />
                <SelectFields  label="Action" icon="play_for_work" name="action_id" value={action_id}  item1="Estimating"  />
                <IconTextField hint="Process Input" label="Process Input" icon="redo" name="process_input" value={process_input} item1="Estimating " />
                <IconTextField hint="Process Owner" label="Process Owner" icon="airline_seat_recline_normal" name="process_owner" value={process_owner} />
                <IconTextField hint="Input Source" label="Input Source" icon="find_in_page" name="process_source" value={process_source} />

              </div>
              <div className="col-sm-6">
                <SelectFields label="Type of Group" icon="group_add" name="type_id" value={type_id}  item1=""  />
                <SelectFields label="Mgmt-Method"  icon="build" name="method" value={method}  item1="Estimating then quote ETQ" item2="Quote then estimate QTE" item3="Estimate After  Order Entry EAQ"  item4="No Estimate NE" />
                <IconTextField hint="Process Output" label="Process Output" icon="undo" name="process_output" value={process_output} />
                <IconTextField hint="Description" label="Description" icon="description" name="process_description" value={process_description} />
                <IconTextField hint="Output Consumer" label="Output Consumer" icon="assignment_ind" name="process_consumer" value={process_consumer} />
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
