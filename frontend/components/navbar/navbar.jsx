import React from 'react';
import Avatar from 'react-avatar';
import { Link, NavLink } from 'react-router-dom';
import QuestionButton from './question_btn';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = {
      showDropDown: false,
      activeLink: false
    };
  }

  toggleDropDown() {
    if (this.state.showDropDown === false) {
      $('.logout-dropdown').addClass('logout-dropdown-show');
    } else {
      $('.logout-dropdown').removeClass('logout-dropdown-show');
    }
    this.setState({ showDropDown: !this.state.showDropDown });
  }

  handleSubmit(e) { // logout
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      const name = this.props.currentUser.first_name + ' ' +
      this.props.currentUser.last_name;
      return (
        <header className='header'>
          <div className='header-nav'>
            <Link to='/index' className='header-logo'>Que?</Link>

              <NavLink to='/index' className='nav-item-link'
                activeClassName='active-nav'>
                <i className="far fa-newspaper">
                  <span className='icon-name'> Home</span>
                </i>

              </NavLink>

              <NavLink to='/answer' className='nav-item-link'
                activeClassName='active-nav'>
                <i className="far fa-edit">
                  <span className='icon-name'> Answer</span>
                </i>
              </NavLink>

            <input type='text' placeholder='Search Que'></input>

            <div className='avatar-dropdown'>
              <Avatar className='avatar'
                onClick={ this.toggleDropDown }
                name={name} round={true} color='#619ad1'
                size='30' textSizeRatio={1.5} />
              <div className='logout-dropdown'
                onClick={ this.handleSubmit }>Logout</div>
            </div>

            <QuestionButton />
          </div>
        </header>
      );
    } else {
      return null;
    }
  }
}
