import { useGetWebsitesQuery } from "./features/api/apiSlice";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { HomePage } from "./features/pages/HomePage";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'
function App() {

  const { data: websites } = useGetWebsitesQuery()
  console.log(websites)
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Website collections</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/categories">Categories</Nav.Link>
              <Nav.Link href="/favourites">Favourites</Nav.Link>
            </Nav>
          </Container>
          <Link to="/"></Link>
        </Navbar>



        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
