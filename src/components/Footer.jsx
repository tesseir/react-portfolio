import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <a href='https://github.com/tesseir' class="btn btn-light" target={'_blank'}>GitHub</a>
          </div>
          <div class="col-sm">
            <a href='./assets/blankresume.pdf' class="btn btn-light" download>Download my Resume</a>
          </div>
          <div class="col-sm">
            <a href='https://www.linkedin.com/in/tess-eir-6a3b69267/' class="btn btn-light" target={'_blank'}>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// https://github.com/tesseir
// https://www.linkedin.com/in/tess-eir-6a3b69267/

export default Footer