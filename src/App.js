import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const img = require('./img.jpg');
  return (
    <div className="App">
      <header className="App-header">
        <div className='div-header'>
          <h1>HTML</h1>
          <div className='number-title'>
            <h1>5</h1>
          </div>
        </div>
      </header>
      <div className='div-nav'>
        <Nav>
          <Navbar expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#link1">Link 1</Nav.Link>
                  <Nav.Link href="#link2">Link 2</Nav.Link>
                  <Nav.Link href="#link3">Link 3</Nav.Link>
                  <Nav.Link href="#link4">Link 4</Nav.Link>
                  <Nav.Link href="#link5">Link 5</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Nav>
      </div>
      <div className='body-aside'>
        <body className='App-body'>
          <div className='div-body'>
            <article className='App-article'>
              <div className='img-article'>
                <img src={img} alt='imagen' />
              </div>
              <div className='title-article'>
                <h2><b>This is a Lorem Ipsum Healding</b></h2>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <br />
                <p ><a href="#link5"> Read More</a></p>
              </div>
            </article>
            <article className='App-article'>
              <div className='img-article'>
                <img src={img} alt='imagen' />
              </div>
              <div className='title-article'>
                <h2><b>This is a Lorem Ipsum Healding</b></h2>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <br />
                <p ><a href="#link5"> Read More</a></p>
              </div>
            </article>
            <article className='App-article'>
              <div className='img-article'>
                <img src={img} alt='imagen' />
              </div>
              <div className='title-article'>
                <h2><b>This is a Lorem Ipsum Healding</b></h2>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <br />
                <a href="#link5"> Read More</a>
              </div>
            </article>
            <br />
          </div>
        </body>
        <aside className='App-aside'>
          <div className='div-aside'>
            <p>Sidbar Links</p>
            <div className='list-link'>
              <a href="#link5"> link 1</a>
              <a href="#link5"> link 2</a>
              <a href="#link5"> link 3</a>
              <a href="#link5"> link 4</a>
            </div>
            <p>Other Widgets</p>
            <div className='text-aside'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
          </div>
        </aside>
      </div>
      <footer className='App-footer'>
        <div className='div-footer'>
          <br />
          <p>Copyrigth <b>KRV</b>. All rights reserved.</p>
          <br />
        </div>
      </footer>
    </div>
  );
}

export default App;
