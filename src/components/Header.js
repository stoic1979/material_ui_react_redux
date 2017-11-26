import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import {white, yellow500, blue600, teal500} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import LocalizedStrings from 'react-localization';
import strings from '../lang/lang.js';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {grey500, cyan300, grey300, pink300, fullWhite} from 'material-ui/styles/colors';
import muiThemeable from 'material-ui/styles/muiThemeable';

var CustomDiv = React.createClass({
  render: function() {
    return <div>{this.props.children}</div>;
  },
});

var CustomDiv2 = React.createClass({

  render: function() {
    const style = {
      appBar: {
        top: 0,
        overflow: 'hidden',
        maxHeight: 57,
        marginBottom: -50,
      },
      menuButton: {
        marginLeft: 10,
      },
      iconsRightContainer: {
        marginLeft: 20,
      },
      badge: {
        padding: 0,
      },
      saveButton: {
        margin: 20,
      },
      hide: {
        display: 'none',
      },
      icons: {
        cursor: 'pointer',
      },
      main: {
        paddingLeft: 10,
        paddingRight: 10,

      },
    };

    return (<Badge
      secondary={true}
      style={style.badge} badgeStyle={{
        top: 5,
        right: 3,
        width: 20,
        height: 20,
      }} badgeContent={5}
            >
      <IconButton />
    </Badge>);
  },
});


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle = () => this.setState({
    open: !this.state.open,
  });
  handleClose = () => this.setState({open: false});

  render() {
    const {styles, handleChangeRequestNavDrawer, setLanguages, setMuiTheme, setOptions} = this.props;

    const style = {
      appBar: {
        top: 0,
        overflow: 'hidden',
        maxHeight: 57,
        marginBottom: -50,
      },
      menuButton: {
        marginLeft: 10,
      },
      iconsRightContainer: {
        marginLeft: 20,
      },
      badge: {
        padding: 0,
      },
      saveButton: {
        margin: 20,
      },
      hide: {
        display: 'none',
      },
      icons: {
        cursor: 'pointer',
      },
      main: {
        paddingLeft: 10,
        paddingRight: 10,

      },
    };

    return (
      <div>
        <AppBar
          style={{
            ...styles,
            ...style.appBar,
          }}
          iconElementLeft={<CustomDiv>
            <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
              <Menu color={white} />
            </IconButton>
          </CustomDiv>}


          iconElementRight={<CustomDiv style={style.iconsRightContainer}>
            <IconMenu
              style={style.icons}
              color={white}
              iconButtonElement={<IconButton><FontIcon color="white" className="material-icons">
                face
        </FontIcon></IconButton>}
              targetOrigin={{
                horizontal: 'left',
                vertical: 'top',
              }}
              anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
              }}
            >
              <MenuItem key={1} primaryText="Messages" />
              <MenuItem key={2} primaryText="Profile" />
              <MenuItem key={3} primaryText="Price List" />
            </IconMenu>
          </CustomDiv>}
        />

      </div>
    );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func,
  setLanguages: PropTypes.func,
  setOptions: PropTypes.func,
  setMuiTheme: PropTypes.func,
};

export default Header;
