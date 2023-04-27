import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


export const Navigation = () => {

    return (

        <Navbar bg="dark" variant="dark" className="d-flex justify-content-between" expand="lg" collapseOnSelect>

            <Navbar.Brand href="/" className='ms-4'>WebCenter</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll" />

            <Navbar.Collapse id="navbarScroll">


                <Form className="d-flex search-form flex-grow-1 me-4">
                    <FormControl
                        type="search"
                        placeholder="Search websites"
                        className="me-1"
                        aria-label="Search"
                    />
                    <Button variant="outline-success ">
                        <b className="bi bi-search">Search</b>
                    </Button>
                </Form>

            </Navbar.Collapse>





        </Navbar>
    )
}
