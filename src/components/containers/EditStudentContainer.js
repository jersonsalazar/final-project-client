/*==================================================
EditStudentContainer.js
================================================== */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import EditStudentView from '../views/EditStudentView';
import { fetchStudentThunk, editStudentThunk } from '../../store/thunks';

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      imageUrl: "",
      campusId: null,
      gpa: null,
      loading: false,
      error: null,
      redirect: false,
      redirectId: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { id } = this.props.match.params;
    this.setState({ loading: true, error: null });
    try {
      await this.props.fetchStudent(id);
    } catch (error) {
      this.setState({ error: 'Failed to fetch student' });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.student !== prevProps.student) {
      this.setState({
        ...this.props.student,
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      const student = { ...this.state };
      const editedStudent = await this.props.editStudent(student);
      this.setState({
        redirect: true,
        redirectId: editedStudent.id,
      });
    } catch (error) {
      this.setState({ error: 'Unable to edit student info' });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.state.redirectId}`} />;
    }

    return (
      <div>
        {this.state.loading ? <p>Loading...</p> : (
          <EditStudentView
            student={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
          />
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  student: state.student,
});

const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  editStudent: (student) => dispatch(editStudentThunk(student)),
});

export default connect(mapState, mapDispatch)(EditStudentContainer);