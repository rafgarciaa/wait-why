import React from 'react';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.form;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return (e) => {
      this.setState ({
        [field]: e.currentTarget.value
      });
    };
  }

  renderErrors() {
    if (this.props.formType === this.props.signUpErr.type) {
      return (
        <ul>
          { this.props.signUpErr.errors.map( (error, idx) => {
              return <li
                key={`error-${idx}`}>{error}</li>;
            }) }
        </ul>
      );
    }
  }

  render() {
    return (
      <label className='session-label'>Sign Up
      <div className='signup-form-box'>
        <form onSubmit={ this.handleSubmit }>
          <div className='names-input-box'>
            <label>FIRST NAME<br/>
              <input
                className='signup-input-box'
                type='text'
                value={this.state.first_name}
                onChange={this.update('first_name')}/>
            </label><br/>
          <label className='lname-wrapper'>LAST NAME<br/>
              <input
                className='signup-input-box'
                type='text'
                value={this.state.last_name}
                onChange={this.update('last_name')}/>
            </label><br/>
          </div>

        <label>EMAIL<br/>
            <input
              className='signup-input-box'
              type='text'
              value={this.state.username}
              onChange={this.update('email')}/>
          </label>
        <label>PASSWORD<br/>
            <input
              className='signup-input-box'
              type='password'
              value={this.state.password}
              onChange={this.update('password')}/>
          </label><br/>
        <label className='disclaimer'>By clicking "Sign Up" you indicate
          that you have read and agree to Que's Terms of Service and
          Privacy Policy.</label><br/><br/>

        <div>
          <a onClick={ this.props.toggleSignUp }>Cancel</a>
          <button>Sign Up</button>
        </div>

        </form>
        <div className='signup-errors-list'>
          { this.renderErrors() }
        </div>
      </div>
      </label>
    );
  }
}
