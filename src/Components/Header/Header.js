import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <Box mt={10.5} align="center" p={6}><a className="header-name" href="/">Social Buddy</a></Box>
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar style={{width: '60%', margin: 'auto'}}>
                    <Typography variant="h6" className={classes.title}><a className="homePosts" href="/">Posts</a></Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                </div>
        </div>
    );
};

export default Header;