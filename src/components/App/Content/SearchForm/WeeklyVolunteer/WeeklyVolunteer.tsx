import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './WeeklyVolunteerStyle';

const WeeklyVolunteer: React.FC<IProps> = ({ weeklyVolunteerName }: IProps): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.weeklyVolunteer}>
            <Typography variant="h6">הזוכה המאושר הוא {weeklyVolunteerName}</Typography>
            <img src='/assets/cup.jpg' className={classes.imageStyle}/>
        </div>
    )
};

export default WeeklyVolunteer;

interface IProps {
    weeklyVolunteerName: string,
};