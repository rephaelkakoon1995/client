import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paperContainer: {
        backgroundImage: `url(${"assets/backgroundImage.jpg"})`,
        width:'100%',
        height:'100%',
        marginTop:'2vh',
    }
});

export default useStyles;