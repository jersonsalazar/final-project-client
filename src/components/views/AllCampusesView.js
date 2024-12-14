/*==================================================
AllCampusesView.js

The Views component is responsible for rendering the web page with data provided by the corresponding Container component.
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
    padding: theme.spacing(4),
    backgroundColor: '#f7f9fc',
    borderRadius: '8px',
    boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
    maxWidth: '700px',
    margin: 'auto',
    marginTop: theme.spacing(4),
  },
  campusItem: {
    margin: theme.spacing(3, 0),
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 1px 5px rgba(0,0,0,0.1)',
  },
  campusImage: {
    height: 200,
    width: 200,
    borderRadius: theme.shape.borderRadius,
    objectFit: 'cover',
    border: '2px solid #ccc',
    margin: theme.spacing(2, 0),
  },
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(1.5),
    borderRadius: 22,
    fontWeight: 'bold',
    fontSize: '14px',
    textTransform: 'none',
  },
  addButton: {
    backgroundColor: '#1976d2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  },
  deleteButton: {
    backgroundColor: '#e53935',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
  }
}));

const AllCampusesView = (props) => {
  const { allCampuses, deleteCampus } = props;
  const classes = useStyles();

  if (!allCampuses.length) {
    return (
      <div className={classes.root}>
        <Typography variant="h5" style={{ marginBottom: '16px', color: '#11153e', fontWeight: '600' }}>
          There are currently no campuses.
        </Typography>
        <Link to="newcampus" style={{ textDecoration: 'none' }}>
          <Button className={`${classes.button} ${classes.addButton}`}>
            Add New Campus
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ fontWeight: '600', marginBottom: '24px', color: '#11153e' }}>
        All Campuses
      </Typography>
      {allCampuses.map((campus) => (
        <div key={campus.id} className={classes.campusItem}>
          <Link to={`/campus/${campus.id}`} style={{ textDecoration: 'none' }}>
            <Typography variant="h5" style={{ color: '#1976d2', fontWeight: '600' }}>
              {campus.name}
            </Typography>
          </Link>
          <Typography variant="subtitle1" style={{ margin: '8px 0', color: '#555' }}>
            Campus ID: {campus.id}
          </Typography>
          <img src={campus.imageUrl} className={classes.campusImage} alt="Campus"/>
          <Link to={'/campuses'} style={{ textDecoration: 'none' }}>
            <div>
              <Button className={`${classes.button} ${classes.deleteButton}`} onClick={() => deleteCampus(campus.id)}>
                Remove Campus
              </Button>
            </div>
          </Link>
        </div>
      ))}
      <br/>
      <Link to={`/newcampus`} style={{ textDecoration: 'none' }}>
        <Button className={`${classes.button} ${classes.addButton}`}>
          Add New Campus
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