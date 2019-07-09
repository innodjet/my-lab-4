import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="container"> 
        <div className="card" >
          <div className="card-header">
           Technologies
          </div>
          <div className="card-body">
          <h5 className="card-title"> Technologies used in this project: </h5>
          <p className="card-text"> React Framework (React Hooks)</p>
          <p className="card-text"> Front End: HTML 5, CSS 3, JavaScript, Bootstrap </p>
          <p className="card-text"> Back End: Node.js, ExpressJS and MongoDb </p>
          <a href="https://github.com/innodjet/my-lab-4" 
             target="_blank" 
             className="btn btn-primary" 
             id="repoButton"
            > Github Reposotory </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;