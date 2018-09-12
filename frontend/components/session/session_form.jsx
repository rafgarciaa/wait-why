import React from 'react';
import SignUpFormContainer from './signup_form_container';
import LogInFormContainer from './login_form_container';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.form;
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

  render() {
    return (
      <div className='background-container'>
        <div className='session-form-container'>
          <h1 className='main-logo'>Que?</h1>
          <p>A place to share knowledge and better understand the world</p>
          <div className='signup-form-container'>
            <SignUpFormContainer />
          </div>
          <div className="login-form-container">
            <LogInFormContainer />
          </div>
        </div>
      </div>
    );
  }
}
