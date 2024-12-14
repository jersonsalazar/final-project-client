/*==================================================
HomePageView.js

The Views component is responsible for rendering the web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(4),
    backgroundColor: '#f7f9fc',
    borderRadius: '8px',
    maxWidth: '1200px',
    margin: 'auto',
    marginTop: theme.spacing(4),
    boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginTop: theme.spacing(4),
    borderRadius: '8px',
    border: '2px solid #ccc',
  },
}));

const HomePageView = () => {
  const classes = useStyles();

  // Render Home page view
  return (
    <div className={classes.root}>
      <Typography variant="h3" style={{ fontWeight: '600', color: '#11153e', marginBottom: '16px' }}>
        Welcome to the Campus Management System
      </Typography>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Main_Quadrangle%2C_University_of_Sydney_%28cropped%29.jpg"
        alt="Campus"
        className={classes.image}
      />
    </div>
  );    
}

export default HomePageView;