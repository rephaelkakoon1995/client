import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '5vh',
    },
    logo: {
        height: '90%',
        width: '20%',
    },
    dividerContainer: {
        paddingTop: '4vh',
        width:'70%',
    },
    divider: {
        width: '100%',
        height: '0.2vh',
        backgroundColor: 'black'
    }
});

export default useStyles;