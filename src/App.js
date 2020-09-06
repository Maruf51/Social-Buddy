import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import PostDetail from './Components/PostDetail/PostDetail';
import AllPosts from './Components/AllPosts/AllPosts';

function App() {
  return (
    <div className="home">
      <Header/>
      <Router>
        <Switch>
          <Route path="/post/:postId">
            <PostDetail/>
          </Route>
          <Route exact path="/">
            <AllPosts/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
