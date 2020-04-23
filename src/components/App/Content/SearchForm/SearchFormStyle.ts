import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop:'10vh',
    },
    inputContainer: {
        display:'flex',
        direction:'rtl',
    },
});

export default useStyles;