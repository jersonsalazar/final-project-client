/*==================================================
NewCampusView.js
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    maxWidth: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '8px',
    padding: theme.spacing(3),
    boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    color: '#11153e',
    padding: theme.spacing(1),
    borderRadius: '5px 5px 0 0',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  label: {
    color: '#11153e',
    fontWeight: 'bold',
    margin: theme.spacing(1, 0),
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '5px 0 15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    '&:focus': {
      borderColor: '#3f51b5',
    },
  },
  buttonSubmit: {
    marginTop: theme.spacing(2),
  },
}));

const NewCampusView = (props) => {
  const { handleChange, handleSubmit } = props;
  const classes = useStyles();

  // Render a New Campus view with an input form
  return (
    <div className={classes.root}>
      <Typography variant="h4">New Campus</Typography>

      <div className={classes.formContainer}>
        <Typography className={classes.formTitle} variant="h6">
          Add New Campus
        </Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className={classes.label}>Name:</label>
          <input className={classes.input} type="text" name="name" required onChange={handleChange} />

          <label className={classes.label}>Address:</label>
          <input className={classes.input} type="text" name="address" required onChange={handleChange} />

          <label className={classes.label}>Description:</label>
          <input className={classes.input} type="text" name="description" placeholder="(Optional)" onChange={handleChange} />

          <label className={classes.label}>Image URL:</label>
          <input className={classes.input} type="text" name="imageUrl" placeholder="(Optional)" onChange={handleChange} />

          <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>    
  );
}

export default NewCampusView;
