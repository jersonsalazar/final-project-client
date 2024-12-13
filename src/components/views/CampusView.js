/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: '#f5f7fa',
    minHeight: '100vh',
  },
  image: {
    height: 220,
    width: 220,
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(3, 0),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    objectFit: 'cover',
  },
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(1.5, 3),
    borderRadius: 25,
    fontWeight: '600',
    textTransform: 'none',
    transition: 'background-color 0.3s ease',
  },
  editButton: {
    backgroundColor: '#4a90e2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#357ABD',
    },
  },
  deleteButton: {
    backgroundColor: '#e94e77',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#d63d68',
    },
  },
  enrollButton: {
    backgroundColor: '#50C878',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#3AA55C',
    },
  },
  infoText: {
    margin: theme.spacing(2, 0),
    color: '#333',
  },
  studentList: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(3),
    margin: theme.spacing(4, 'auto'),
    maxWidth: 600,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  studentItem: {
    padding: theme.spacing(1, 0),
    borderBottom: '1px solid #e0e0e0',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  studentLink: {
    textDecoration: 'none',
    color: '#4a90e2',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const CampusView = (props) => {
  const classes = useStyles();
  const { campus, deleteCampus, editCampus } = props;

  const studentInfo = campus.students.length === 0 ? (
    <Typography className={classes.infoText} variant="body1">
      There are no students enrolled at this college as of now.
    </Typography>
  ) : (
    <Typography className={classes.infoText} variant="h6">
      Number of students enrolled at this college: {campus.students.length}
    </Typography>
  );

  return (
    <div className={classes.root}>
      <Typography variant="h3" color="textPrimary" gutterBottom>
        {campus.name}
      </Typography>
      <img src={campus.imageUrl} className={classes.image} alt="college campus" />
      <Typography variant="body1" color="textSecondary">
        <strong>Address:</strong> {campus.address}
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        <strong>Description:</strong> {campus.description}
      </Typography>
      <div>
        <Link to={`/editcampus/${campus.id}`} style={{ textDecoration: 'none' }}>
          <Button
            className={`${classes.button} ${classes.editButton}`}
            onClick={() => editCampus(campus)}
          >
            Edit Campus Information
          </Button>
        </Link>
        <Link to="/campuses" style={{ textDecoration: 'none' }}>
          <Button
            className={`${classes.button} ${classes.deleteButton}`}
            onClick={() => deleteCampus(campus.id)}
          >
            Delete Campus
          </Button>
        </Link>
      </div>
      {studentInfo}
      <div className={classes.studentList}>
        {campus.students.map((student) => (
          <div key={student.id} className={classes.studentItem}>
            <Link to={`/student/${student.id}`} className={classes.studentLink}>
              <Typography variant="h6">
                {student.firstname} {student.lastname}
              </Typography>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/students" style={{ textDecoration: 'none' }}>
        <Button className={`${classes.button} ${classes.enrollButton}`}>
          Enroll Student
        </Button>
      </Link>
    </div>
  );
};

export default CampusView;
