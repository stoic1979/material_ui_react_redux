import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
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

export default class ProcessDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSlider: 0.5,
      secondSlider: 50,
      value: 1,
      type: '',
      finished_good_items: '',
      raw_material: '',
      components: '',
      action: '',
      estimating: '',
      quoting: '',
      order_entry: '',
      shipping: '',
      vender_rfq: '',
      vender_po: '',
      receiving: '',
      inventory_transfer: '',
      scheduling: '',

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
    const {type, finished_good_items, raw_material, components, action, estimating, quoting, order_entry, shipping, vender_rfq, vender_po, receiving, inventory_transfer, scheduling} = this.state;
    return (
      <div>
        <h3 style={styles.navigation}>Process Details
        </h3>

        <Paper style={styles.paper}>
          <Subheader>Process Details</Subheader>
          <form>
            <FlatButton
              label="Edit"
              href="./"
              style={style.editButton}
            />
            <div className="row">
              <div className="col-sm-6">

                <IconTextField hint="Type" label="Type" icon="code" name="type" value={type}  />
                <IconTextField hint="Finished good items" label="Finished good items" icon="gps_not_fixed"  name="finished_good_items" value={finished_good_items} />
                <IconTextField hint="Action" label="Action" icon="play_for_work" name="action" value={action} />
                <IconTextField hint="Quoting" label="Quoting" icon="format_quote" name="quoting" value={quoting} />
                <IconTextField hint="Shipping" label="Shipping" icon="local_shipping" name="shipping" value={shipping} />
                <IconTextField hint="Vender rfq" label="Vender rfq" icon="vpn_lock" name="vender_rfq" value={vender_rfq} />
                <IconTextField hint="Receiving" label="Receiving" icon="call_received" name="receiving" value={receiving} />
              </div>
              <div className="col-sm-6">
                <IconTextField hint="Raw Material" label="Raw Material" icon="filter_tilt_shift" name="raw_material" value={raw_material} />
                <IconTextField hint="Components" label="Components" icon="settings" name="components" value={components} />
                <IconTextField hint="Estimating" label="Estimating" icon="developer_board" name="estimating" value={estimating} />
                <IconTextField hint="Order Entry" label="Order Entry" icon="border_color" name="order_entry" value={order_entry} />
                <IconTextField hint="Scheduling" label="Scheduling" icon="schedule" name="scheduling" value={scheduling} />
                <IconTextField hint="Vender po" label="Vender po" icon="vpn_lock" name="vender_po" value={vender_po} />
                <IconTextField hint="Inventory Transfer" label="Inventory Transfer" icon="add_shopping_cart" name="inventory_transfer" value={inventory_transfer} />
              </div>
            </div>


            <div className="card-footer displayNone" style={style.footer}>
              <div style={style.buttonsDiv}>
                <FlatButton
                  label="Save and Exit"
                  href="./"
                  style={style.flatButton}
                />

                <FlatButton
                  label="Next"
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
