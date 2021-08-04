import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Alerts from './Alerts.js'

const useStyles = makeStyles((theme) => ({
    root: {
      width: 300,
      height: 200
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black'
    },
    pos: {
      marginBottom: 12,
    },

    button: {
        display: 'block',
        marginTop: theme.spacing(2),
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
  }));

export default function Dashboard (props) {

    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

      const [value, setValue] = React.useState(30);

    const classes = useStyles();

    return (
        <main id="dashMain">
            <h1>Music Dashboard:</h1>
            <section id="components">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Online Mode
                        </Typography>
                        <Typography variant="body2" component="p">
                        Is this application connected to the internet?
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <div>
                        <Switch
                            checked={props.checkedStatus}
                            defaultChecked
                            onChange={e => {props.onlineStatusHandler(e)}}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <Typography></Typography>
                    </div>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Master Volume
                        </Typography>
                        <Typography variant="body2" component="p">
                        Overrides all other sound settings in this application
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <div className={classes.root}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <VolumeUp />
                            </Grid>
                            <Grid item xs>
                            <Slider
                                value={props.volume}
                                onChange={(e, value) => {props.volumeChanger(e, value)}}
                                aria-labelledby="input-slider"
                            />
                            </Grid>
                            <Grid item>
                                <h1>{props.volume}%</h1>
                            </Grid>
                        </Grid>
                    </div>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Sound Quality
                        </Typography>
                        <Typography variant="body2" component="p">
                            Manually control the music quality in event of poor connection
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Normal</InputLabel>
                            <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={props.quality}
                            onChange={event => {props.qualityHandler(event)}}
                            >
                            <MenuItem value={1}>Low</MenuItem>
                            <MenuItem value={2}>Normal</MenuItem>
                            <MenuItem value={3}>High</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    </CardActions>
                </Card>
            </section>
            <Alerts volume={props.volume} onlineStatus={props.checkedState} quality={props.quality}/>
            
            
        </main>

    )

}