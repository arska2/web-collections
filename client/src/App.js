import { useGetWebsitesQuery } from "./features/api/apiSlice";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { HomePage } from "./features/pages/HomePage";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function App() {

  const { data: websites } = useGetWebsitesQuery()
  console.log(websites)
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">

          <Navbar.Brand href="/">Web Center</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/favourites">Favourites</Nav.Link>
          </Nav>
          <Form className="d-flex search-form">
            <FormControl
              type="search"
              placeholder="Search websites"
              className=""
              aria-label="Search"
            />
            <Button variant="outline-success">
              <b className="bi bi-search">Search</b>
            </Button>
          </Form>
          <Nav className="">
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
          </Nav>

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
