import React, { useState } from 'react';
import './Medical.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import db from '../firebase';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function Medical() {
    const classes = useStyles();
    const [uniqueId, setUniqueId] = useState("");
    const [idType, setIdType] = useState("ac");
    const [nvictims, setNvictims] = useState("");
    const [conscious, setConscious] = useState("yes");

    const sendReport = e => {
        e.preventDefault();

        db.collection('medical-reports').add({
            id: uniqueId,
            idType: idType,
            victims: nvictims,
            conscious: conscious,
        });

        setNvictims("");
        setUniqueId("");
        setIdType("");
        setConscious("");
    }


    return (
        <React.Fragment>
            <div className="medical">
                <form>
                    <FormControl className="medi">
                        <InputLabel>Unique ID of Victim</InputLabel>
                        <Input value={uniqueId} onChange ={(e) => setUniqueId(e.target.value)}/>
                    </FormControl>
                    <br/>
                    <FormControl>
                        <FormLabel className="medi-con">Type of Unique ID of Victim</FormLabel>
                        <RadioGroup value={idType} onChange = {(e) => setIdType(e.target.value)} >
                        <FormControlLabel value="ac" control={<Radio />} label="Aadhaar" />
                        <FormControlLabel value="dl" control={<Radio />} label="Driving License" />
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="no-victims">No. of Victims</InputLabel>
                        <Select 
                            labelId="no-victims" 
                            value={nvictims} onChange = {(e) => setNvictims(e.target.value)}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={'More'}>More</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <FormControl>
                        <FormLabel className="medi-con">Is the victim(s) conscious?</FormLabel>
                        <RadioGroup value={conscious} onChange = {(e) => setConscious(e.target.value)}>
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <Button onClick={sendReport} className="report" type="submit" variant="contained" color="primary">
                        Report
                    </Button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Medical;
