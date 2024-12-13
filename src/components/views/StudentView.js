/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  studentImage: {
    height: 100,
    width: 100,
    borderRadius: theme.shape.borderRadius,
  },
  infoText: {
    margin: theme.spacing(1, 0),
  },
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: 22,
    fontWeight: 'bold',
    fontSize: '14px',
  },
  editButton: {
    backgroundColor: '#ADD8E6',
    color: '#11153e',
    '&:hover': {
      backgroundColor: '#91bed4',
    },
  },
  deleteButton: {
    backgroundColor: '#FFF0F5',
    color: 'red',
    '&:hover': {
      backgroundColor: '#f3d1d5',
    },
  }
}));

const StudentView = (props) => {
  const { student, deleteStudent, editStudent } = props;
  const classes = useStyles();

  let campusInfo;
  if (student.campus == null) {
    campusInfo = <Typography className={classes.infoText}>(Student is not currently enrolled at a college)</Typography>;
  } else {
    campusInfo = (
      <Link to={`/campus/${student.campus.id}`}>
        <Typography variant="h6">{student.campus.name}</Typography>
      </Link>
    );
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4">{student.firstname + " " + student.lastname}</Typography>
      <img src={student.imageUrl} className={classes.studentImage} alt="Student"/>
      <Typography className={classes.infoText}><strong>First Name:</strong> {student.firstname}</Typography>
      <Typography className={classes.infoText}><strong>Last Name:</strong> {student.lastname}</Typography>
      <Typography className={classes.infoText}><strong>Email:</strong> {student.email}</Typography>
      <Typography className={classes.infoText}><strong>GPA:</strong> {student.gpa}</Typography>
      {campusInfo}
      <Link to={`/editstudent/${student.id}`}>
        <Button className={`${classes.button} ${classes.editButton}`} onClick={() => editStudent(student)}>
          Edit Student Information
        </Button>
      </Link>
      <br/><br/>
      <Link to={'/students'}>
        <Button className={`${classes.button} ${classes.deleteButton}`} onClick={() => deleteStudent(student.id)}>
          Delete Student
        </Button>
      </Link>
    </div>
  );
};

export default StudentView;
