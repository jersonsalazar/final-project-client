/*==================================================
StudentView.js

The Views component is responsible for rendering the web page with data provided by the corresponding Container component.
It constructs a React component to display the single student details page.
================================================== */
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
    maxWidth: '500px',
    margin: 'auto',
    marginTop: theme.spacing(4),
  },
  studentImage: {
    height: 120,
    width: 120,
    borderRadius: theme.shape.borderRadius,
    objectFit: 'cover',
    border: '2px solid #ccc',
    margin: theme.spacing(2, 0),
  },
  infoText: {
    margin: theme.spacing(1, 0),
    fontSize: '16px',
    color: '#333',
  },
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(1.5),
    borderRadius: 22,
    fontWeight: 'bold',
    fontSize: '14px',
    textTransform: 'none',
  },
  editButton: {
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

const StudentView = (props) => {
  const { student, deleteStudent, editStudent } = props;
  const classes = useStyles();

  let campusInfo;
  if (student.campus == null) {
    campusInfo = <Typography className={classes.infoText}>This student is currently not enrolled at any campus.</Typography>;
  } else {
    campusInfo = (
      <Link to={`/campus/${student.campus.id}`} style={{ textDecoration: 'none' }}>
        <Typography variant="h6" style={{ color: '#1976d2', fontWeight: '600', marginTop: '16px' }}>
          {student.campus.name}
        </Typography>
      </Link>
    );
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ fontWeight: '600', marginBottom: '16px', color: '#11153e' }}>
        {student.firstname + " " + student.lastname}
      </Typography>
      <img src={student.imageUrl} className={classes.studentImage} alt="Student"/>
      <Typography className={classes.infoText}><strong>First Name:</strong> {student.firstname}</Typography>
      <Typography className={classes.infoText}><strong>Last Name:</strong> {student.lastname}</Typography>
      <Typography className={classes.infoText}><strong>Email:</strong> {student.email}</Typography>
      <Typography className={classes.infoText}><strong>GPA:</strong> {student.gpa}</Typography>
      {campusInfo}
      <Link to={`/editstudent/${student.id}`} style={{ textDecoration: 'none' }}>
        <Button className={`${classes.button} ${classes.editButton}`} onClick={() => editStudent(student)}>
          Edit Student Details
        </Button>
      </Link>
      <br/><br/>
      <Link to={'/students'} style={{ textDecoration: 'none' }}>
        <Button className={`${classes.button} ${classes.deleteButton}`} onClick={() => deleteStudent(student.id)}>
          Remove Student
        </Button>
      </Link>
    </div>
  );
};

export default StudentView;