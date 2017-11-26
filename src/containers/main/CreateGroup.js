import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {grey500, white} from 'material-ui/styles/colors';
import styles from '../../styles';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import IconTextField from '../../components/iconedtextField';
import SelectFields from '../../components/SelectFields';

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

export default class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSlider: 0.5,
      secondSlider: 50,
      value: 1,
      group_name: '',
      type_id: '',
      revision: '',
      group_description: '',
      defining_characteristics: '',
      group_requirements: '',


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
    const {group_name, type_id, revision,  group_description, defining_characteristics, group_requirements} = this.state;
    return (
      <div>
        <h3 style={styles.navigation}>Create Group
        </h3>

        <Paper style={styles.paper}>
          <Subheader>Create Group</Subheader>
          <form>
            <FlatButton
              label="Edit"
              href="./"
              style={style.editButton}
            />
            <div className="row">
              <div className="col-sm-6">
                <IconTextField hint="Group Name" label="Enter Group Name" icon="group" name="group_name" value={group_name} />
                <IconTextField hint="Revision" label="Enter Revision" icon="rate_review" name="revision" value={revision} />
              </div>
              <div className="col-sm-6">
                <SelectFields label="Type of Group" icon="group_add" name="type_id" value={type_id}  item1="Finished goods" item2="Purchased Material" item3="Components" />
                <IconTextField hint="Description" label="Enter Description" icon="description" name="group_description" value={group_description} />
              </div>
            </div>

            <IconTextField
              hint="Characteristics" label="Define Characteristics" icon="donut_small" name="defining_characteristics" value={defining_characteristics}
            />
            <IconTextField hint="Requirements" label="Enter Requirements" icon="tune" name="group_requirements" value={group_requirements} />
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
