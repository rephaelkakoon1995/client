import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paperContainer: {
        backgroundImage: `url(${"assets/backgroundImage.jpg"})`,
        width:'100%',
        height:'55%',
        marginTop:'10vh',
    }
});

export default useStyles;