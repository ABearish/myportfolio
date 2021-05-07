import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const SinglePost = React.lazy(() => import("./components/SinglePost"));
const Post = React.lazy(() => import("./components/Post"));
const Project = React.lazy(() => import("./components/Project"));
const Error = React.lazy(() => import("./components/Error"));


const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
        <Suspense fallback={<div>...Loading</div>}>
      <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={SinglePost} path="/post/:slug" />
          <Route component={Post} path="/post" />
          <Route component={Project} path="/project" />
          <Route component={Error} />
      </Switch>
        </Suspense>
    </BrowserRouter>
  );
};

export default App;
