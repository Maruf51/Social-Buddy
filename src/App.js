import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import PostDetail from './Components/PostDetail/PostDetail';
import AllPosts from './Components/AllPosts/AllPosts';
import Error from './Components/Error/Error';

function App() {
  return (
    <div className="home">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/">
            <AllPosts/>
          </Route>
          <Route path="/post/:postId">
            <PostDetail/>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
