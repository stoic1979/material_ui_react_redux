import React from 'react';
import {Route, IndexRoute, hashHistory} from 'react-router';
import App from './containers/App';

// Form Pages Routes
import FormPage from './containers/form/FormPage';
import FormValidation from './containers/form/FormValidation';
import FormElements from './containers/form/FormElements';

// Table Pages Routes
import TablePage from './containers/table/TablePage';
import advancedTable from './containers/table/advancedTable';
import dataTablePage from './containers/table/dataTable';

// eXTRA Pages Ui Routes
import NotFoundPage404 from './containers/extra_page/404';
import LoginPage from './containers/extra_page/LoginPage';
import lockPage from './containers/extra_page/lock';

// ui pages
import CreateGroup from './containers/main/CreateGroup';
import CreateProcess from './containers/main/CreateProcess';
import ProcessDetails from './containers/main/ProcessDetails';
import ProcessFlow from './containers/main/ProcessFlow';
import CreateUser from './containers/main/CreateUser';
import CreateCompany from './containers/main/CreateCompany';
import CreateHelpDocument from './containers/main/CreateHelpDocument';
import GroupList from './containers/main/groupList';
import ProcessList from './containers/main/processList';
import UserList from './containers/main/userList';
import CompanyList from './containers/main/companyList';
import ReportList from './containers/main/reportList';
import HelpDocumentList from './containers/main/helpDocumentList';


export default (
  <Route history={hashHistory}>
    <Route path="login" component={LoginPage} />
    <Route path="lock" component={lockPage} />
    <Route path="404" component={NotFoundPage404} />
    <Route path="/" component={App}>

      <Route path="form" component={FormPage} />
      <Route path="formValidation" component={FormValidation} />
      <Route path="formElements" component={FormElements} />

      <Route path="table" component={TablePage} />
      <Route path="advancedTable" component={advancedTable} />
      <Route path="dataTable" component={dataTablePage} />

      <Route path="createGroup" component={CreateGroup} />
      <Route path="createProcess" component={CreateProcess} />
      <Route path="processDetails" component={ProcessDetails} />
      <Route path="processFlow" component={ProcessFlow} />
      <Route path="createUser" component={CreateUser} />
      <Route path="createCompany" component={CreateCompany} />
      <Route path="createHelpDocument" component={CreateHelpDocument} />
      <Route path="groupList" component={GroupList} />
      <Route path="processList" component={ProcessList} />
      <Route path="userList" component={UserList} />
      <Route path="companyList" component={CompanyList} />
      <Route path="reports" component={ReportList} />
      <Route path="helpDocumentList" component={HelpDocumentList} />


      <Route path="assets" />
      <Route path="*" component={FormPage} />

    </Route>
  </Route>
);
