/*==================================================
Header.js

It contains the Header component to be displayed on every page.
The header contains navigation links to every other page.
================================================== */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontWeight: '700',
    fontFamily: 'sans-serif',
    fontSize: '28px',
    color: '#fff',
  },
  appBar:{
    backgroundColor: '#1976d2',
    boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
  },
  links:{
    textDecoration: 'none',
  },
  homeButton: {
    marginRight: theme.spacing(2),
    fontWeight: 'bold',
    textTransform: 'none',
  },
  navButton: {
    marginRight: theme.spacing(2),
    fontWeight: 'bold',
    textTransform: 'none',
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Campus Management System
          </Typography>

          <Link className={classes.links} to={'/'}>
            <Button 
              className={classes.homeButton} 
              variant="contained" 
              style={{ backgroundColor: '#fff', color: '#1976d2' }}
            >
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={'/campuses'}>
            <Button 
              className={classes.navButton} 
              variant="contained" 
              style={{ backgroundColor: '#fff', color: '#1976d2' }}
            >
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'}>
            <Button 
              className={classes.navButton} 
              variant="contained" 
              style={{ backgroundColor: '#fff', color: '#1976d2' }}
            >
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );    
}

export default Header;