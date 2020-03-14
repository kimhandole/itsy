import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      first_name: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul className="login-error-list">
        {this.props.errors.map((error, i) => (
          <li className="login-error-list-item" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleFirstName() {
    if (this.props.formType === "Register") {
      return (
        <div id="first-name-div">
          <br />
          <label>First name <span className="require-star">*</span></label>
          <input type="text"
            value={this.state.first_name}
            onChange={this.update('first_name')}
            className="login-input"
          />
        </div>
      );
    }
  }

  handleEmailField() {
    if (this.props.formType === "Register") {
      return (
        <label>Email address <span className="require-star">*</span></label>);
    }
    else {
      return (<label>Email address</label>);
    }
  }

  handlePasswordField() {
    if (this.props.formType === "Register") {
      return (<label>Password <span className="require-star">*</span></label>);
    }
    else {
      return (<label>Password</label>);
    }
  }

  handleFormTitle() {
    if (this.props.formType === "Register") {
      return (
        <div>
          <h1 id="with-p">
            Create your account
          </h1>
          <p>
            Registraion is easy.
          </p>
        </div>
      );
    } else {
      return (
        <h1 id="without-p">
          {this.props.formType}
        </h1>
      );
    }
  }

  handleDemoButton() {
    if (this.props.formType === "Sign in") {
      return (
        <button id="demo-button"
          onClick={this.handleDemoSubmit}
          value="Demo Sign In">
          <span>Continue with Demo</span>
        </button>
      );
    }
  }

  demo(user) {
    const intervalSpeed = 75;
    const { email, password } = user;
    const demoEmailTime = email.length * intervalSpeed;
    const demoPasswordTime = password.length * intervalSpeed;
    const buffer = intervalSpeed * 2;
    const totalDemoTime = demoEmailTime + demoPasswordTime + buffer;
    this.demoEmail(email, intervalSpeed);
    setTimeout(() => this.demoPassword(password, intervalSpeed), demoEmailTime);
    setTimeout(() => this.props.loginForm(user), totalDemoTime)
    setTimeout(() => this.props.closeModal(), totalDemoTime + buffer)
  }

  demoEmail(email, intervalSpeed) {
    let i = 0;
    setInterval(() => {
      if (i <= email.length) {
        this.setState({ email: email.slice(0, i) })
        i++
      } else {
        clearInterval()
      }
    }, intervalSpeed);
  }

  demoPassword(password, intervalSpeed) {
    let j = 0;
    setInterval(() => {
      if (j <= password.length) {
        this.setState({ password: password.slice(0, j) })
        j++
      } else {
        clearInterval();
      }
    }, intervalSpeed);
  }

  handleDemoSubmit() {
    const user = {
      email: "demo@itsy.com",
      password: "123123"
    };
    this.demo(user);
  }

  render() {

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form-type">
            {this.handleFormTitle()}
            {this.props.otherForm}
          </div>
          <div className="login-form">
            {this.renderErrors()}
            <br />
            {this.handleEmailField()}
            <input type="email"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
            />
            {this.handleFirstName()}
            <br />
            {this.handlePasswordField()}
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
        {this.handleDemoButton()}
      </div>
    );
  }
}

export default withRouter(SessionForm);