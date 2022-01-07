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
          <h1>5</h1>
        </div>
      </header>
      <nav>
        <div className='div-nav'>
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
        </div></nav>
      <div className='body-aside'>
        <body className='App-body'>
          <div className='div-body'>
            <article>
              <div className='img-article'>
                <img src={img} />
              </div>
            </article>
            <article></article>
            <article></article>
          </div>
        </body>
          <aside className='App-aside'>
            <div className='div-aside'>
            </div>
          </aside>
      </div>
      <footer className='App-footer'>
        <div className='div-footer'>

        </div>
      </footer>
    </div>
  );
}

export default App;
