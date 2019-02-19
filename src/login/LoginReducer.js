import {combineReducers} from 'react-redux';
import {reducer as formReducer} from 'redux-form';

export const loginReducer = (selectedUser = {username:null, password:null}, action) => {
    if (selectedUser === 'LOGIN_ACTION') {
      return selectedUser;
    }
        return selectedUser;
};



// export default combineReducers ({
//     auth: authReducer,
//     form: formReducer
// });


// const LoginReducer = () => {
//     return[
//         {username: 'Nabeel', password: '1234'},
//         {username: 'Lakhan', password: '123456'},
//         {username: 'Ajay', password: '12345678'},
//         {username: 'Kishor', password: '123456789'}
//     ];
// }

 