import React, { Component } from 'react';

class classForm extends Component {
    constructor(props) {
      super(props);
      this.state ={name: '', email: '', password: '', };
      this.state ={value: ''}
  
      this.handleName = this.handleName.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
    }
  
    handleName(event) {
      this.setState({value: event.target.name});
    }
    handleEmail(event) {
      this.setState({value: event.target.email});
    }
    handlePassword(event) {
      this.setState({value: event.target.password});
    }
  
    render() {
      return (
          <>
        <form className="new-form" >
        <div className="mb-3">
          <h1>CLASS FORM</h1>
          <label for="exampleInputName" className="form-label">Name</label>
          <input type="text" className="form-control" value={this.state.name}  onChange={this.handleName} />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail" className="form-label">Email</label>
          <input type="email" className="form-control" value={this.state.email}onChange={this.handleEmail} />
        </div>
        <div className="mb-3 form-check">
          <label for="exampleInputPassword" className="form-check-label">Password</label>
          <input type="password" className="form-control" value={this.state.password} onChange={this.handlePassword} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      </>
      );
    }
  }
export default classForm;
