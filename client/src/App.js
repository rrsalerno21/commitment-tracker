import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container">
        <h2>MERN Stack</h2>
        <Route exact path="/" component={ToDoList} />
        <Route path=".edit/:id" component={EditToDo} />
      </div>
    </Router>
  );
}

export default App;
