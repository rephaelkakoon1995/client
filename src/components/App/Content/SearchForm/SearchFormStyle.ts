import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        width: '100%',
        height: '50%',
        paddingTop:'6vh',
        justifyContent: 'space-around'
    },
    inputContainer: {
        display:'flex',
        direction:'rtl',
    },
    inputStyle: {
        width: '15vw',
        background:'rgb(240,240,240)',
        '&:hover': {
            background: "rgb(240,240,240)",
         },
    },
    inputStyleMobile: {
        width: '35vw',
        background:'rgb(240,240,240)',
        '&:hover': {
            background: "rgb(240,240,240)",
         },
    },
    buttonFindNext:{
        background:'white',
        "&:hover": {
            background: theme.palette.primary.main,
            color:'white',
        }
    }
}));

export default useStyles;