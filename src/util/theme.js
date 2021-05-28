import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    drawerWidth: 280,
    typography: {
        fontSize: 12,
        fontFamily: [
            'Inter',
            'Roboto',
        ].join(',')
    },
    text: {
        color: '#546e7a',
    },
    palette: {
        primary: {
            main: '#2f65cb',
        },
        background: {
            default: '#f4f6f8',
        },
        text: {
            primary: '#263238',
        }
    }
});

export default theme;
