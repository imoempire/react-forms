import React, { Component } from 'react';

class classForm extends Component {
    constructor(props) {
      super(props);
      this.state ={name: '', email: '', password: '', value:''}
      this.state ={value: ''};
  
      // this.handleChange = this.handleChange.bind(this);
      // this.handleName = this.handleName.bind(this);
      // this.handleEmail = this.handleEmail.bind(this);
      // this.handlePassword = this.handlePassword.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
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
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <>
        <form onChange={this.handleSubmit} >
          <label>Name:<input type="text" value={this.state.value} onChange={this.handleChange} /></label><br />
          <input type="submit" value="Submit" />
        </form>

       <div className="new-form">
        <form>
        <div className="mb-3">
          <label for="exampleInputName" className="form-label">name</label>
          <input type="text" className="form-control" value={this.state.name}  onChange={this.handleName} />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail" className="form-label">Email</label>
          <input type="email" className="form-control" value={this.state.email}onChange={this.handleEmail} />
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label" for="exampleInputPassword">Password</label>
          <input type="password" className="form-control" value={this.state.password} onChange={this.handlePassword} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>

      </>
      );
    }
  }
export default classForm;
