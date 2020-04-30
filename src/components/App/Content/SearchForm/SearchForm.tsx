import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './SearchFormStyle';

const SearchForm: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const getCurrentDate = (): string => {
        const currentDate: Date = new Date(Date.now());
        const year: number = currentDate.getFullYear();
        const month: any = (currentDate.getMonth() + 1) < 10 ? `0${currentDate.getMonth() + 1}` : (currentDate.getMonth() + 1);
        const day: any = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate();

        return `${year}-${month}-${day}`;
    }
    const [dutyType, setDutyType] = useState('');
    const [date, setDate]=useState(getCurrentDate());
    const [points, setPoints] = useState(0);
    const [isValidDate, setIsValidDate] = useState(true);

    const handleChangeDuty = (event: React.ChangeEvent<{ value: unknown }>) => {
        setDutyType(event.target.value as string);
    };

    const handleChangeDate = (event: React.ChangeEvent<{ value: unknown }>) => {
        const newDate = event.target.value as string;

        setDate(newDate);
        setIsValidDate(isValidDateCheck(newDate));
    };

    const handleChangePoints =  (event: React.ChangeEvent<{ value: unknown }>) => {
        setPoints(event.target.value as number)
    };

    const isValidDateCheck = (newDate:string) : boolean => {
        const currentDate = new Date(Date.now());
        const [year, month, day] = newDate.split('-');
        const newDateObject = new Date(Number(year), Number(month)-1, Number(day));

        return (currentDate.getTime() < newDateObject.getTime());
    };

    const isValidForm = () : boolean => {
        return dutyType !== '' && isValidDate;
    };

    return (
        <div className={classes.container}>
            <div className={classes.inputContainer}>
                <div style={{ paddingTop: '3vh', paddingLeft: '3vh' }}>
                    <InputLabel style={{ color: 'rgb(26,26,26)', fontSize: '5vh' }}>מציאת תורן ל</InputLabel>
                </div>
                <FormControl variant='outlined'>
                    <Select
                        value={dutyType}
                        onChange={handleChangeDuty}
                        className={classes.inputStyle}
                    >
                        <MenuItem value={'clean'}>נקיון</MenuItem>
                        <MenuItem value={'cook'}>מטבח</MenuItem>
                        <MenuItem value={'guard'}>שמירה</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className={classes.inputContainer} style={{ paddingRight: '5vw' }}>
                <div style={{ paddingTop: '2vh', paddingLeft: '3vh' }}>
                    <InputLabel style={{ color: 'rgb(26,26,26)', fontSize: '5vh' }}>בתאריך </InputLabel>
                </div>
                <TextField
                    type="date"
                    variant='outlined'
                    error={!isValidDate}
                    value={date}
                    onChange={handleChangeDate}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className={classes.inputStyle}
                />
            </div>
            <div className={classes.inputContainer} style={{ paddingLeft: '2vw' }}>
                <div style={{ paddingTop: '2vh', paddingLeft: '3vh' }}>
                    <InputLabel style={{ color: 'rgb(26,26,26)', fontSize: '5vh' }}>התזכה אותו ב </InputLabel>
                </div>
                <TextField
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={points}
                    onChange={handleChangePoints}
                    variant="outlined"
                    inputProps={{ min: "0", step: "1" }}
                    className={classes.inputStyle}
                    style={{ width: '5vw' }}
                />
                <div style={{ paddingTop: '2vh', paddingRight: '3vh' }}>
                    <InputLabel style={{ color: 'rgb(26,26,26)', fontSize: '5vh' }}> נקודות </InputLabel>
                </div>
            </div>

            <Button variant="outlined" color="primary" className={classes.buttonFindNext} disabled={!isValidForm()}>
                מצא לי את התורן הבא
            </Button>
        </div>
    )
};

export default SearchForm;