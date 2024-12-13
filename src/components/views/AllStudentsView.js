/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
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
  studentItem: {
    margin: theme.spacing(2, 0),
  },
  studentImage: {
    height: 100,
    width: 100,
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

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;
  const classes = useStyles();

  if (!students.length) {
    return (
      <div className={classes.root}>
        <Typography>There are no students.</Typography>
        <Link to="newstudent">
          <Button className={`${classes.button} ${classes.addButton}`}>
            Add Student
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className={classes.root}>
      <Typography variant="h4">All Students</Typography>
      {students.map((student) => (
        <div key={student.id} className={classes.studentItem}>
          <Link to={`/student/${student.id}`}>
            <Typography variant="h5">{student.firstname + " " + student.lastname}</Typography>
          </Link>
          <img src={student.imageUrl} className={classes.studentImage} alt="Student"/>
          <br/><br/>
          <Button 
            className={`${classes.button} ${classes.deleteButton}`}
            onClick={() => deleteStudent(student.id)}>
            Delete
          </Button>
          <hr/>
        </div>
      ))}
      <br/>
      <Link to={`/newstudent`}>
        <Button className={`${classes.button} ${classes.addButton}`}>
          Add Student
        </Button>
      </Link>
      <br/><br/>
    </div>
  );
};

export default AllStudentsView;