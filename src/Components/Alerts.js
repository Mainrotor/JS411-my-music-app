import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const checkOffline = (status) => {

    if (status) {
        return (<Alert severity="success">You are currently Online</Alert>)
    } else {
        return (<Alert severity="info">You are currently Offline</Alert>)
    }
  }

  const checkVolume = (vol) => {
    if (vol > 80) {
        return (
            <Alert severity="warning">Listening to music at a high volume could cause long-term hearing loss.</Alert>
        )
    } else {
        return <div></div>
    }
  }

  const checkQuality = (quality) =>{
      if (quality < 2) {
        return (<Alert severity="warning">Sound quality is degraded. Change your sound quality settings if your internet speed allows it.</Alert>
        )
      }
  }




export default function Alerts (props) {
    const classes = useStyles();

        return (
            <div id="alerts">
                <h1>System Notifications</h1>
                <div class="alert">{checkVolume(props.volume)}</div>
                <div class="alert">{checkOffline(props.onlineStatus)}</div>
                <div class="alert">{checkQuality(props.quality)}</div>
            </div>
            

        )


    
        
    
}