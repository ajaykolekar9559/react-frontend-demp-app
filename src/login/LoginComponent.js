import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';


class Login extends React.Component{
    constructor(props){
        super(props);
    }
        
   renderInput({input, label, meta}){
       
       return (
           <div className="field">
                <label>{label}</label>
                <input {...input} />
                <div className="text-danger">
                    <small>{meta.error}
                    </small>
                </div>
            </div>
       );
    }

    onSubmit(formValues){
        console.log(formValues);
    }

    render(){
        return(
            <div className="container"> 
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="card">
                            <h3 className="text-center">Log-In to Your Account</h3>
                            <Field 
                                name="username" 
                                component={this.renderInput} 
                                label="Username" 
                            />
                            <Field 
                                name="password"
                                component={this.renderInput} 
                                label="Password"
                            />
                            <button className="btn btn-lg btn-primary btn-block text-uppercase">LogIn</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}


// const mapStateToProps = (state) => {
//     return {
//       modal: state.modal,
//       state: state.loginAction
//     };
//   };


//Data Validation
const validate = (formValues) => {
    const error={};

    if(!formValues.username) {
        error.username='Must enter username!';
    }

    if(!formValues.password) {
        error.password='Must enter password';
    }

    return error;
}

export default reduxForm({
    form: 'loginForm',
    validate: validate
})(Login);