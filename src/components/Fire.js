import React, { useState } from 'react';
import './Fire.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import db from "../firebase";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function Fire() {
    const classes = useStyles();
    const [nvictims, setNvictims] = useState("");
    const [buildType, setBuildType] = useState("");

    const sendReport = e => {
        e.preventDefault();

        db.collection('fire-reports').add({
            victims: nvictims,
            buildingType: buildType,
        });

        setNvictims("");
        setBuildType("");
    }
    return (
        <React.Fragment>
            <div className="fire">
                <form>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="no-victims">No. of Victims</InputLabel>
                        <Select 
                            labelId="no-victims" 
                            value={nvictims}
                            onChange={(e) => setNvictims(e.target.value)}
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
                    <FormControl className={classes.formControl}>
                        <InputLabel id="type-build">Building Type</InputLabel>
                        <Select 
                            labelId="type-build"
                            value={buildType}
                            onChange={(e) => setBuildType(e.target.value)}
                        >
                            <MenuItem value={'Home'}>Home</MenuItem>
                            <MenuItem value={'Apartments'}>Apartments</MenuItem>
                            <MenuItem value={'Industry'}>Industry</MenuItem>
                            <MenuItem value={'Shop'}>Shop</MenuItem>
                            <MenuItem value={'Other'}>Other</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <Button onClick={sendReport} className="report" type="submit" variant="contained">
                        Report
                    </Button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Fire;
