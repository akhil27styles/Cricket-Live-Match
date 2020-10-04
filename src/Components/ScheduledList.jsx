import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
const ScheduledList = ({sch}) => {
    console.log(sch);
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '75%',
          maxWidth: 200,
          backgroundColor: theme.palette.background.paper,
        },
      }));
      const classes = useStyles();
    return (
        <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
        <ListItem>
        <p>{sch.name}</p>
      </ListItem>
      <ListItem>
    <p>{sch.date}</p>
      </ListItem>
      <Divider />
        </List>
    </div>
    )
}

export default ScheduledList
