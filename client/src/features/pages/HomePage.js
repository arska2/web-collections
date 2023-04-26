import { Row, Col } from "react-bootstrap"
import { CategoryContainer } from "../categories/CategoryContainer"
import { TagContainer } from "../tags/TagContainer"
import { WebsiteContainer } from "../websites/WebsiteContainer"

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