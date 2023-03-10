import React from 'react';

function Portfolio() {
  return (
    <div className="about-me">

      <h1 className="mx-auto text-center">My Works</h1>

      <div class="container">
        <div class="row">
          <div class="col d-grid gap-3">
            
            <a href="https://github.com/tesseir/e-commerce"
              target="_blank"><img src="./images/e-commerce.png"/></a>

            <a href="https://github.com/tesseir/note-taker"
              target="_blank"><img src="./images/note-taker.png"/></a>

            <a href="https://github.com/tesseir/project-tracker"
              target="_blank"><img src="./images/project-tracker.png"/></a>

          </div>
          <div class="col d-grid gap-3">

            <a href="https://github.com/tesseir/readme-generator"
              target="_blank"><img src="./images/readme-generator.png"/></a>
              
            <a href="https://github.com/tesseir/social-media-api"
              target="_blank"><img src="./images/note-taker.png"/></a>

            <a href="https://github.com/tesseir/Workday-Scheduler"
              target="_blank"><img src="./images/project-tracker.png"/></a>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Portfolio