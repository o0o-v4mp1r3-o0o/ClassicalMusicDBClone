import React from "react";
import Header from "../Header";
import TaskBar from "../TaskBar";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <Header />
      <TaskBar />
      <h1>Log In</h1>
      <div id="authmessage" className="message">
        Please Log In
      </div>
      <form>
        <div className="inputemail">
          <div>
            <label htmlFor="ArtistEmail">Email</label>
          </div>
          <input
            name="data[artist][email]"
            maxLength="200"
            type="email"
            id="ArtistEmail"
            required="required"
          ></input>
        </div>
        <br></br>
        <div className="inputpassword">
          <div>
            <label htmlFor="ArtistPassword">Password</label>
          </div>
          <input
            name="data[artist][password]"
            maxLength="200"
            type="password"
            id="ArtistPassword"
            required="required"
          ></input>
        </div>
        <br></br>
        <div className="submit">
          <input type="submit" value="Login" id="submitt"></input>
        </div>
      </form>
      <br></br>
      <br></br>
      <p>Don't have an account yet?</p>
      <p>
        <Link to="/register" className="linkk">
          Register »
        </Link>
      </p>
      <div id="footer" className="Footer">
        <p>© 2021 MissElf.com</p>
      </div>
    </div>
  );
}

export default Login;
