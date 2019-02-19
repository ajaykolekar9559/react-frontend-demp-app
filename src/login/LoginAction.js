
const loginAction = (username, password) => {
    console.log(this.loginAction);
    return{
        type: 'LOGIN_ACTION',
        payload: {
            username: username,
            password: password
        }
    };
}

export default LoginAction;