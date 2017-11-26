import React from 'react';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router';
import strings from '../lang/lang.js';
import Progress from 'antd/lib/progress';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {browserHistory} from 'react-router';

const styles_list = {

  padding: '15px 12px 12px 45px',
  fontSize: 14,
  color: '#91a6bb',
};

const styles_right_icon = {

};


const styles_left_icon = {
  fontSize: 20,
};

const styles_list_item = {
  padding: '0px',
  fontSize: 13,
  lineHeight: '12px',


};

export class MenuList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      selectedIndex: 0,
    };
    this.handleToggle = this
      .handleToggle
      .bind(this);
    this.handleClose = this
      .handleClose
      .bind(this);
  }


  componentWillMount() { }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleClose() {
    this.setState({open: true});
  }

  select = (index) => {
    if (index == 2) {
      browserHistory.push('lock');
    } else if (index == 1) {
      browserHistory.push('login');
    } else if (index == 0) {
      browserHistory.push('documents');
    }

    this.setState({selectedIndex: index});
  }


  render() {
    return (
      <div>
        <div className="sideBar">

          <List>
            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.groupList}
              leftIcon={<FontIcon  style={styles_left_icon}   color={this.props.muiTheme.appBar.color} className="material-icons">group </FontIcon>}
              initiallyOpen={false}


              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.group1} containerElement={<Link to={'createGroup'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.groupList} containerElement={<Link to={'groupList'} />} />,

              ]}


            />
            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.processList}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> extension </FontIcon>}
              initiallyOpen={false}


              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.process1} containerElement={<Link to={'createProcess'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.process2} containerElement={<Link to={'processDetails'} />} />,
                <ListItem style={styles_list_item} key={3} primaryText={strings.menu.process3} containerElement={<Link to={'processFlow'} />} />,
                <ListItem style={styles_list_item} key={4} primaryText={strings.menu.processList} containerElement={<Link to={'processList'} />} />,

              ]}

            />


            <Divider inset={false} />
            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.userList}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> account_circle</FontIcon>}
              initiallyOpen={false}
              containerElement={<Link to={'userList'} />}


              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.user1} containerElement={<Link to={'createUser'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.userList} containerElement={<Link to={'userList'} />} />,

              ]}
            />

            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.editCompany}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> rate_review </FontIcon>}
              initiallyOpen={false}


              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.company1} containerElement={<Link to={'createCompany'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.company3} containerElement={<Link to={'companyList'} />} />,
              ]}
            />
            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.reports}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> pages </FontIcon>}
              containerElement={<Link to={'reports'} />}
            />
            <Divider inset={false} />
            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.help}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> donut_small </FontIcon>}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.help1} containerElement={<Link to={'createHelpDocument'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.help2} containerElement={<Link to={'helpDocumentList'} />} />,

              ]}
            />
            <Divider inset={false} />
            {/*
            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.forms}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> rate_review </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.basicForm} containerElement={<Link to={'form'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.formValidate} containerElement={<Link to={'formValidation'} />} />,
                <ListItem style={styles_list_item} key={3} primaryText={strings.menu.formElement} containerElement={<Link to={'formElements'} />} />,
              ]}
              />


            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.tables}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> pages </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}

              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.basicTable} containerElement={<Link to={'table'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.advancedTable} containerElement={<Link to={'advancedTable'} />} />,
                <ListItem style={styles_list_item} key={3} primaryText={strings.menu.dataTable} containerElement={<Link to={'dataTable'} />} />,
              ]}
            />

            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.extraPages}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> view_column </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.Login} containerElement={<Link to={'login'} />} />,
                <ListItem style={styles_list_item} key={5} primaryText={strings.menu.lockScreen} containerElement={<Link to={'lock'} />} />,
                <ListItem style={styles_list_item} key={6} primaryText={strings.menu.error} containerElement={<Link to={'404'} />} />,

              ]}
            />
            */}

          </List>


          {this.props.isAuthenticated && <div className={classnames('app-content', {expanded: this.state.open})}>
            {this.props.children}
          </div>}
        </div>

      </div>
    );
  }
}

export default muiThemeable()(MenuList);
