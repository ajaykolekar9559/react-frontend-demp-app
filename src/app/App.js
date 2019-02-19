import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { configureStore } from './ConfigureStore';
import '../styles/styles.scss';
import LayoutMain from './LayoutMain';
import Login from '../login/LoginComponent';

const store = configureStore();


const Layout = withRouter(LayoutMain);

export default class App extends React.Component {
  render() {
      return (
        <Provider store={store}>
          <BrowserRouter>
             <Login />
          </BrowserRouter>
        </Provider>
      );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
