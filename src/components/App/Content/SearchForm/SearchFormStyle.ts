import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    content: {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    rootDesktopOrLaptop: {
        width: '30vw',
        maxHeight: '50vh'
    },
    rootTabletOrMobileDevice: {
        width: '60vw',
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
    },
    weeklyVolunteerStyle:{
        paddingTop:'2vh'
    },
    doneIcons: {
        paddingLeft:'0.5vw',
        paddingTop:'0.5vh',
    },
});

export default useStyles;