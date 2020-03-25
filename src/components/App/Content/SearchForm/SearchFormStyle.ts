import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    root: {
        width: '30vw',
        maxHeight: '50vh'
    },
    media: {
        height: '25vh',
    },
    button:{
        borderRadius:'5px',
        width:'90%'
    },
    cardActions:{
        paddingTop:'2vh',
        paddingBottom:'2vh',
        display:'flex',
        justifyContent:'center'
    }
});

export default useStyles;