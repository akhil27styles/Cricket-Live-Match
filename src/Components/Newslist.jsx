import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
const Newslist = ({News}) => {
  console.log(News);
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '75%',
      maxWidth: 200,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  const classes = useStyles();

    return (
        <div className={classes.root} >
            <List component="nav" aria-label="main mailbox folders">
            <ListItem>
            <p>{News.title}</p>
          </ListItem>
          <ListItem>
          <Link to={News.url}/>
          </ListItem>
          <ListItem>
          <img className="newsimg" src={News.urlToImage} ></img>
          <Link to={News.url}/>
          </ListItem>
          <Divider />
            </List>
        </div>
    )
}

export default Newslist
