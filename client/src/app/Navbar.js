import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


export const Navigation = () => {

    return (

        <Navbar bg="dark" variant="dark" className="d-flex justify-content-between" expand="lg" collapseOnSelect>

            <Navbar.Brand href="/">WebCenter</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
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
            </Navbar.Collapse>



        </Navbar>
    )
}
