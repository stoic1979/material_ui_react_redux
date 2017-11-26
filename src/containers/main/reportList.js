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

};
const data = require('json!./data.json');


const CheckBtn = () => (
  <div style={styles.action}>
    <Checkbox iconStyle={styles.checkbox} />
  </div>
);

const dropdown = () => (
  <DropDown />
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

const ReportList = () => {
  const columns = [

    {id: 0, title: 'Process no', prop: 'id', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 1, title: 'Name', prop: 'last_name', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 2, title: 'Description', prop: 'email', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 3, title: 'Revision', prop: 'id', width: '10%', headerClass: 'mdl-data-table__cell--numeric', cellClass: 'mdl-data-table__cell--numeric'},
    {id: 4, title: 'Type', prop: 'country.code', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 5, title: 'Amount of Task', prop: 'country.code', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 6, title: 'Download Report', prop: 'country.code', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},


  ];


  return (
    <div>
      <h3 style={globalStyles.navigation}> Report List</h3>

      <Row>
        <Col xs={12} md={12} lg={12}>
          <Card style={styles.card}>

            <div className="mdl-layout mdl-layout--no-drawer-button container">
              <div className="mdl-layout--fixed-drawer" id="asa">
                <h3> Report List</h3>

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


export default ReportList;
