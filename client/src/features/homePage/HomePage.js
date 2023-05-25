import { Row, Col, Button, Container } from "react-bootstrap"
import { CategoryContainer } from "./CategoryContainer"
import { TagContainer } from "./TagContainer"
import { WebsiteContainer } from "./WebsiteContainer"
import { useState } from "react"
import { AddWebpage } from "./AddWebpage"
import Fab from '@mui/material/Fab'
import './HomePage.css'








export const HomePage = () => {
    const [addWebsiteOpen, setAddWebsiteOpen] = useState(false)

    console.log("state", addWebsiteOpen)
    return (
        <div style={{ position: "relative", minHeight: "90vh" }}>
            <Container fluid >

                <Row>
                    <CategoryContainer />
                </Row>
                <Row >
                    <TagContainer />
                </Row>
                <Row >
                    <WebsiteContainer />
                </Row>

                <AddWebpage open={addWebsiteOpen} handleClose={() => setAddWebsiteOpen(false)} />
                <Fab style={{ position: "absolute" }} className={addWebsiteOpen ? "add-button-pressed" : "add-button"} variant="extended" aria-label="add" onClick={() => { const c = addWebsiteOpen; setAddWebsiteOpen(!c) }}>
                    Add Website
                </Fab>
            </Container>

        </div>





    )
}