import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import useStyles from './SearchFormStyle';

const SearchForm: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const [dutyType, setDutyType] = useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setDutyType(event.target.value as string);
    };


    return (
        <div className={classes.container}>
            <div className={classes.inputContainer}>
                <div style={{paddingTop:'1vh', paddingLeft:'3vh'}}>
                    <InputLabel style={{color:'rgb(26,26,26)', fontSize:'5vh'}}>מציאת תורן ל</InputLabel>
                </div>
                <FormControl variant='filled' size='small'>
                <Select
                    value={dutyType}
                    onChange={handleChange}
                    style={{width:'15vw'}}
                >
                    <MenuItem value={'clean'}>נקיון</MenuItem>
                    <MenuItem value={'cook'}>מטבח</MenuItem>
                    <MenuItem value={'guard'}>שמירה</MenuItem>
                </Select>
                </FormControl>
            </div>
        </div>
    )
};

export default SearchForm;