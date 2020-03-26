import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    weeklyVolunteer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        paddingTop:'2vh',
    },
    imageStyle: {
        width: '10vw',
        height: '20vh',
        paddingTop:'1vh'
    }
});

export default useStyles;