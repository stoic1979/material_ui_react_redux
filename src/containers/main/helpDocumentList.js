import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {MaterialContainer} from 'react-table-components';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import 'react-table-components/styles/styles.css';
import globalStyles from '../../styles';
import {Row, Col} from 'react-flexbox-grid';
import {Card} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import DropDown from '../../components/dropdown';
import {Link} from 'react-router';


const styles = {
  checkbox: {
    marginLeft: '-18px',
  },
  action: {
    paddingLeft: 12,
  },
  card: {
    padding: 20,
  },
  flatBtn: {
    fill: grey500,
    float: 'right',
  },

  drpdown: {
    marginRight: 100,
  },
};
const data = require('json!./data.json');


const CheckBtn = () => (
  <div style={styles.action}>
    <Checkbox iconStyle={styles.checkbox} />
  </div>
);


const dropdown = () => (
  <DropDown
    style={styles.drpdown}
  />
);


const generateRowProps = (row) => {
  const options = {};
  if (row.gender === 'Male') {
    options.className = 'info';
  }
  if (row.gender === 'Female') {
    options.className = 'warning';
  }
  return options;
};

const HelpDocumentList = () => {
  const columns = [


    {id: 0, title: 'Name', prop: 'last_name', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 1, title: 'Description', prop: 'email', width: '40%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 2, title: 'Download document', prop: 'country.code', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 3, title: 'Edit', render: dropdown, width: '5%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},

  ];


  return (
    <div>
      <h3 style={globalStyles.navigation}> Help Document List</h3>

      <Row>
        <Col xs={12} md={12} lg={12}>
          <Card style={styles.card}>

            <div className="mdl-layout mdl-layout--no-drawer-button container">
              <div className="mdl-layout--fixed-drawer" id="asa">
                <h3> Help Document List</h3>
                <FlatButton
                  label="New Help Document "
                  style={styles.flatBtn}
                  containerElement={<Link to={'createHelpDocument'} />}
                />
                <br />
                <MaterialContainer
                  keys="id"
                  className="mdl-data-table"
                  columns={columns}
                  onDragColumn={(columns) => console.log(columns)}
                  onChangeColumnsVisibility={(columns) => console.log(columns)}
                  dataArray={data}
                  draggable={true}
                  sortable={true}
                  sortBy={{prop: 'country.name', order: 'asc'}} generateRowProps={generateRowProps}
                  pageSizeOptions={[5]}
                />

              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};


export default HelpDocumentList;
