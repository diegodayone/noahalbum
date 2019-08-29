import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePageComponent from './Components/HomePageComponent';
import ListAlbumComponent from './Components/ListAlbumComponent';

class App extends React.Component {

  constructor(params) {
    super(params);

    this.state = {
      query: ""
    }
  }

  render() {

    return (
      <Router>

        <Link to="/">Home</Link>
        <Link to="/albums">Albums</Link>

        <input type="text" value={this.state.query} onChange={(val) => this.setState({ query: val.target.value })} />


        <Route path="/" exact component={HomePageComponent} />
        <Route path="/albums" exact render={() =>
          <ListAlbumComponent query={this.state.query}></ListAlbumComponent>
        } />
      </Router >
    );
  }
}

export default App;
