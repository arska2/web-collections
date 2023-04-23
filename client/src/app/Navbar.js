import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'



export const Navigation = () => {

    return (

        <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">

            <Navbar.Brand href="/">WebCenter</Navbar.Brand>
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
    )
}
