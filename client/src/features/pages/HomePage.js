import { CategoryContainer } from "../categories/CategoryContainer"
import { TagContainer } from "../tags/TagContainer"
import { WebsiteContainer } from "../websites/WebsiteContainer"

export const HomePage = () => {



    return (
        <div >
            <div className="row">
                <CategoryContainer />
            </div>
            <div className="row">
                <div className="col-2">
                    <TagContainer />
                </div>
                <div className="col-8">
                    <WebsiteContainer />
                </div>
            </div>




        </div>
    )
}