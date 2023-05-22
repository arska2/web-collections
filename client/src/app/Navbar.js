import { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearch } from './uiSlice';


export const Navigation = () => {

    const [searchText, setSearchText] = useState("")
    const dispatch = useDispatch()

    const onSearchClicked = () => {
        dispatch(setSearch(searchText))
    }

    return (

        <Navbar bg="dark" variant="dark" className="d-flex justify-content-between navigation" expand="lg" collapseOnSelect>

            <Navbar.Brand className='ms-4 brand'><Link to="/">WebCenter</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll" />

            <Navbar.Collapse id="navbarScroll">


                <Form className="d-flex search-form flex-grow-1 me-3">
                    <FormControl
                        type="search"
                        placeholder="Search websites"
                        className="me-1"
                        aria-label="Search"
                        onChange={ev => setSearchText(ev.target.value)}
                    />
                    <Button variant="outline-success " onClick={onSearchClicked}>
                        <b className="bi bi-search">Search</b>
                    </Button>
                </Form>
                <Button variant="outline-secondary me-1">
                    <Link to="/login"><b className="">Log In</b></Link>

                </Button>

                <Button variant="outline-primary me-4">
                    <Link to="/signup"> <b className="">Sign Up</b></Link>

                </Button>
            </Navbar.Collapse>





        </Navbar>
    )
}
