import { Row, Col, Button, Container } from "react-bootstrap"
import { CategoryContainer } from "./CategoryContainer"
import { TagContainer } from "./TagContainer"
import { WebsiteContainer } from "./WebsiteContainer"
import { useState } from "react"
import { AddWebpage } from "./AddWebpage"
import './HomePage.css'








export const HomePage = () => {
    const [addWebsiteOpen, setAddWebsiteOpen] = useState(false)

    console.log("state", addWebsiteOpen)
    return (
        <div>
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
                <Button className="add-button" onClick={() => { const c = addWebsiteOpen; setAddWebsiteOpen(!c) }}><b>Add Website</b></Button>
                <AddWebpage open={addWebsiteOpen} handleClose={() => setAddWebsiteOpen(false)} />
            </Container>

        </div>





    )
}