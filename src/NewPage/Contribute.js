import React from "react";
import Header from "../Header";
import TaskBar from "../TaskBar";
import "./Contribute.css";
function Contribute() {
  return (
    <div className="contribute">
      <Header />
      <TaskBar />
      <div className="contents">
        <div className="contents_left">
          <h1>Contribute Knowledge</h1>
          <p>
            Resources in Classical Music DB Project are contributed by community
            volunteers. If you are familiar with a subject your contribution
            would be tremendous help, here are some ways to contribute:
          </p>
          <ul>
            <li>
              Are you a musician or performer? Create your repertoire and
              provide notes or videos to share your first hand experience with
              other musicians.
            </li>
            <li>Share your repertoire!</li>
            <li>Help complete or correct work list of a composer.</li>
            <li>Provide or correct syllabus of certification program.</li>
            <li>Help spread the word !</li>
          </ul>
        </div>
        <div className="contents_right">
          <h2>Donate to Miss Elf's Piano Emporium</h2>
          <p>Miss Elf's Piano Emporium is run entirely by volunteers.</p>
          <p>
            Your generous donation can help pay for server and bandwidth to keep
            this project running and continuing its goal of making resource
            accessible to all classical musicians.
          </p>
          <span>
            <a href="https://www.paypal.com/us/home">Donate</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contribute;
