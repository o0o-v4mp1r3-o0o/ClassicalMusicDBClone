import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";
import FrontPageVideos from "./FrontPageVideos";
function Body() {
  return (
    <div className="body">
      <div className="body_left">
        <p>Popular Composers</p>
        <div class="container">
          <span className="composers">Chopin</span>
          <span className="composers">Brahms</span>
          <span className="composers">Brahms</span>
          <span className="composers">Brahms</span>
          <span className="composers">Brahms</span>
          <span className="composers">Brahms</span>
          <span className="composers">Brahms</span>
          <span className="composers">Brahms</span>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <p>Find Us On Facebook</p>
        <a href="https://www.facebook.com/ClassicalMusicDB/">Facebook</a>
      </div>
      <div className="body_right">
        <p>Discover Beautiful Music </p>
        <div class="containerright">
          <span className="text">
            Music organized by Difficulties with authoritative grading system by
          </span>
          <p>ABRSM, RCM and Henle.</p>
          <p>
            <Link to="/composers" className="link">
              Browse Music by Difficulties / Grades »
            </Link>
          </p>
          <br></br>
          <p>
            Easily sort by Genre, by Difficulty, by Work Number or any way you
          </p>
          <p>like. It's Music Discovery that makes sense.</p>
          <p>
            <Link to="/composers" className="link">
              Browse Music by Composers »
            </Link>
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="collectfavorites">
            <p>Collect Your Favorites / Manage Repertoire</p>
          </div>
          <p>Simply click " Add to My Repertoire " or " Add to My Favorites"</p>
          <span className="secondpara">
            when browsing any musical work. Sort, Highlight, and Share your
          </span>
          <span className="secondpara">collection.</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="recentvideos">
            <p>Recent Video Links</p>
          </div>
          <p>
            <FrontPageVideos src="https://www.youtube.com/embed/6BXKh4f6Vhw" />
          </p>
          <p>
            <FrontPageVideos src="https://www.youtube.com/embed/YNTdr1me2-Q" />
          </p>
          <p>
            <FrontPageVideos src="https://www.youtube.com/embed/8nX76NFhpYs" />
          </p>
          <p>
            <FrontPageVideos src="https://www.youtube.com/embed/Go5i1Q9gxGI" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
