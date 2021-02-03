import React, { Component } from 'react';
import Form from '../../components/form';

class MoviesPageViews extends Component {
  state = {
    search: '',
  };

  handleTakeDataFromForm = data => {
    this.setState({
      search: data,
    });
  };

  render() {
    return <Form onSubmit={this.handleTakeDataFromForm} />;
  }
}

export default MoviesPageViews;
