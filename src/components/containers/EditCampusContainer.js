/*==================================================
EditCampusContainer.js
================================================== */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import EditCampusView from '../views/EditCampusView';
import { fetchCampusThunk, editCampusThunk } from '../../store/thunks';

class EditCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      description: "",
      imageUrl: "",
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
      await this.props.fetchCampus(id);
    } catch (error) {
      this.setState({ error: 'Failed to fetch campus' });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.campus !== prevProps.campus) {
      this.setState({
        ...this.props.campus,
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
      const campus = { ...this.state };
      const editedCampus = await this.props.editCampus(campus);
      this.setState({
        redirect: true,
        redirectId: editedCampus.id,
      });
    } catch (error) {
      this.setState({ error: 'Unable to edit campus info' });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/campus/${this.state.redirectId}`} />;
    }

    return (
      <div>
        {this.state.loading ? <p>Loading...</p> : (
          <EditCampusView
            campus={this.state}
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
  campus: state.campus,
});

const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  editCampus: (student) => dispatch(editCampusThunk(student)),
});

export default connect(mapState, mapDispatch)(EditCampusContainer);