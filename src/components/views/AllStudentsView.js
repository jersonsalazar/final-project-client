/*==================================================
AllStudentsView.js

The Views component is responsible for rendering the web page with data provided by the corresponding Container component.
It constructs a React component to display the page containing all students.
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
    maxWidth: '700px',
    margin: 'auto',
    marginTop: theme.spacing(4),
  },
  studentItem: {
    margin: theme.spacing(3, 0),
    padding: theme.spacing(2),
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0px 1px 5px rgba(0,0,0,0.1)',
  },
  studentImage: {
    height: 100,
    width: 100,
    borderRadius: theme.shape.borderRadius,
    objectFit: 'cover',
    border: '2px solid #ccc',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
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

const AllStudentsView = (props) => {
  const { students, deleteStudent } = props;
  const classes = useStyles();

  if (!students.length) {
    return (
      <div className={classes.root}>
        <Typography variant="h5" style={{ marginBottom: '16px', color: '#11153e', fontWeight: '600' }}>
          There are currently no students registered.
        </Typography>
        <Link to="newstudent" style={{ textDecoration: 'none' }}>
          <Button className={`${classes.button} ${classes.addButton}`}>
            Add New Student
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ fontWeight: '600', marginBottom: '24px', color: '#11153e' }}>
        All Registered Students
      </Typography>
      {students.map((student) => (
        <div key={student.id} className={classes.studentItem}>
          <Link to={`/student/${student.id}`} style={{ textDecoration: 'none' }}>
            <Typography variant="h5" style={{ color: '#1976d2', fontWeight: '600' }}>
              {student.firstname + " " + student.lastname}
            </Typography>
          </Link>
          <img src={student.imageUrl} className={classes.studentImage} alt="Student"/>
          <Link to={`/students`} style={{ textDecoration: 'none' }}>
            <div>
              <Button className={`${classes.button} ${classes.deleteButton}`} onClick={() => deleteStudent(student.id)}>
                Remove Student
              </Button>
            </div>
          </Link>
        </div>
      ))}
      <br/>
      <Link to={`/newstudent`} style={{ textDecoration: 'none' }}>
        <Button className={`${classes.button} ${classes.addButton}`}>
          Add New Student
        </Button>
      </Link>
      <br/><br/>
    </div>
  );
};

export default AllStudentsView;