/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  campusItem: {
    margin: theme.spacing(2, 0),
  },
  campusImage: {
    height: 200,
    width: 200,
    borderRadius: theme.shape.borderRadius,
  },
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: 22,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#11153e',
    color: 'white',
    '&:hover': {
      backgroundColor: '#333',
    },
  },
  deleteButton: {
    backgroundColor: '#B22222',
    color: 'white',
    '&:hover': {
      backgroundColor: '#D32F2F',
    },
  }
}));

const AllCampusesView = (props) => {
  const {allCampuses, deleteCampus} = props;
  const classes = useStyles();

  if (!allCampuses.length) {
    return (
      <div className={classes.root}>
        <Typography>There are no campuses.</Typography>
        <Link to="newcampus">
          <Button className={`${classes.button} ${classes.addButton}`}>
            Add Campus
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4">All Campuses</Typography>
      {allCampuses.map((campus) => (
        <div key={campus.id} className={classes.campusItem}>
          <Link to={`/campus/${campus.id}`}>
            <Typography variant="h5">{campus.name}</Typography>
          </Link>
          <Typography variant="subtitle1">Campus ID: {campus.id}</Typography>
          <img src={campus.imageUrl} className={classes.campusImage} alt="Campus"/>
          <br/><br/>
          <Button 
            className={`${classes.button} ${classes.deleteButton}`}
            onClick={() => deleteCampus(campus.id)}>
            Delete
          </Button>
          <hr/>
        </div>
      ))}
      <br/>
      <Link to={`/newcampus`}>
        <Button className={`${classes.button} ${classes.addButton}`}>
          Add Campus
        </Button>
      </Link>
      <br/><br/>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
