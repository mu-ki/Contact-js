import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
      mail: "",
      fav: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const obj = {
      name: this.state.name,
      number: this.state.number,
      mail: this.state.mail,
      fav: this.state.fav
    };
    axios
      .post("http://localhost:8080/add", obj)
      .then(res => this.setState({ name: "", number: "", mail: "", fav: "" }));
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div id="wrapper">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="!#">
                Web App
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="!#">Home</a>
                </li>
                <li>
                  <a href="!#">Add Contact</a>
                </li>
                <li>
                  <a href="!#">View Contact</a>
                </li>
                <li>
                  <a href="!#">Fav Contact</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="!#">
                    <span className="glyphicon glyphicon-user" /> Muki
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid text-center">
          <div className="row content">
            <div className="col-sm-3 sidenav">
              <center>
                <h1>Add Contacts</h1>
              </center>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="usr">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="user"
                    name="name"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Ph Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="number"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mail"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-check">
                  <input
                    type="hidden"
                    value="0"
                    name="fav"
                    onChange={this.handleChange}
                  />
                  <input
                    type="checkbox"
                    value="1"
                    name="fav"
                    onChange={this.handleChange}
                  />

                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out for fav
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-sm-5 text-left">
              <center>
                <h1>Stored Contacts</h1>
              </center>
              <hr />
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-4 sidenav">
              <center>
                <h1>Fav Contacts</h1>
              </center>
              <hr />
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <footer className="footer">
          <p className="heart">
            Made with ❤  in Crayond
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
