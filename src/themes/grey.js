import getMuiTheme from 'material-ui/styles/getMuiTheme';

const ThemeGrey = getMuiTheme({
  palette: {
    primary1Color: '#f20',
    primary2Color: '#4db6ac',
    alternateTextColor: '#4a4a4a',
    canvasColor: '#616161',
    textColor: '#bdbdbd',
    secondaryTextColor: 'rgba(255,255,255,0.54)',
    disabledColor: '#757575',
    accent1Color: '#607d8b',
    accent2Color: '#9e9e9e',
    primary3Color: '#757575',
    borderColor: '#757575',
  },
  raisedButton: {
    fontSize: 12,
  },
  appBar: {
    height: 50,
  },
  drawer: {
    width: 230,
    left: 150,
  },

});

export default ThemeGrey;
