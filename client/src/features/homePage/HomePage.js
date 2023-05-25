import { Row, Col, Button, Container } from "react-bootstrap"
import { CategoryContainer } from "./CategoryContainer"
import { TagContainer } from "./TagContainer"
import { WebsiteContainer } from "./WebsiteContainer"
import { useState } from "react"
import { AddWebpage } from "./AddWebpage"









export const HomePage = () => {
    const [addWebsiteOpen, setAddWebsiteOpen] = useState(false)

    console.log("state", addWebsiteOpen)
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={11}>
                        <Row>
                            <CategoryContainer />
                        </Row>
                        <Row>
                            <TagContainer />
                        </Row>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Button onClick={() => { const c = addWebsiteOpen; setAddWebsiteOpen(!c) }}><b>Add Website</b></Button>
                        <AddWebpage open={addWebsiteOpen} handleClose={() => setAddWebsiteOpen(false)} />
                    </Col>
                </Row>
                <Row>
                    <WebsiteContainer />
                </Row>
            </Container>

        </div>





    )
}