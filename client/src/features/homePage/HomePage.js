import { Row, Col } from "react-bootstrap"
import { CategoryContainer } from "./CategoryContainer"
import { TagContainer } from "./TagContainer"
import { WebsiteContainer } from "./WebsiteContainer"

export const HomePage = () => {



    return (
        <div>
            <Row>
                <CategoryContainer />
            </Row>
            <Row>
                <TagContainer />
            </Row>
            <Row>
                <WebsiteContainer />
            </Row>
        </div>





    )
}