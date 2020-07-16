// Import FirebaseAuth and firebase.
import React from 'react';
import logo from '../../images/toc-long-logo.png';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'



class Register extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

    signup(e){
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(()=>{ 
            const { history } = this.props;
            history.push("/home");
          })
        .catch((error) => {
            console.log(error);
          })
      }

  render() {
    const { history } = this.props;
    
    return (
        <div className="container">
            <div className="card bg-light" style={{marginTop: "3em"}}>
                <img className="mx-auto" src={logo} style={{ width: "50%", marginTop: "2em" }} alt="ToC Logo" />
                <h1 className="mx-auto" style={{ color: "#bf4d24",  marginTop: ".6em" }}>Event Manager</h1>
                <article className="card-body mx-auto" style={{"max-width": "400px"}}>
                    <p className="card-title mt-2 text-center">Create an Account</p>
                    <form>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input 
                            name="firstName" 
                            className="form-control" 
                            placeholder="First Name" 
                            type="text"
                            />
                    </div> 
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input 
                            name="lastName" 
                            className="form-control" 
                            placeholder="Last Name" 
                            type="text"
                            />
                    </div> 
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input 
                            name="email" 
                            className="form-control" 
                            placeholder="Email address" 
                            type="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input 
                            name="password" 
                            className="form-control" 
                            placeholder="Password" 
                            type="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input name="passwordRepeat" className="form-control" placeholder="Repeat password" type="password"/>
                    </div>
                    <div className="form-group">
                        <button 
                            onClick={this.signup} className="btn btn-primary btn-block"> Create Account  </button>
                    </div>       
                    <p className="text-center">Have an account? <a href="/login">Log In</a> </p>                                                                 
                </form>
                </article>
            </div> 
        </div>
    );
  }
}

export default Register;