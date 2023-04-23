import { Badge } from "react-bootstrap";
import { useGetWebsitesQuery } from "../api/apiSlice"
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from "react-redux";


let WebsiteCard = ({ website }) => {
    return (
        <article className="website-card">
            <header>
                <h2>{website.name}</h2>
            </header>
            {/* <img src={website.image} /> */}
            <div className="website-card-content">
                <p>{website.description}</p>
                {website.tags.map(tag => <Badge pill bg="secondary">{tag.name}</Badge>)}
            </div>
            <footer>{website.url}</footer>
        </article>
    )
}




export const WebsiteContainer = () => {

    const { data: websites, isLoading } = useGetWebsitesQuery()
    const selectedCategories = useSelector(state => state.uiReducer.selectedCategories)
    const selectedTags = useSelector(state => state.uiReducer.selectedTags)

    let filtWebsites = websites

    if (selectedCategories.length >= 1) {
        filtWebsites = filtWebsites.filter(website => website.categories.some(category => selectedCategories.includes(category.name)))
    }
    if (selectedTags.length >= 1) {
        filtWebsites = filtWebsites.filter(website => website.tags.some(tag => selectedTags.includes(tag.name)))
    }


    if (isLoading) return <Spinner animation="border" variant="primary" />
    console.log('websites', websites)
    return (<div className="website-cards">
        {filtWebsites.map(website => <WebsiteCard key={website.id} website={website} />)}
    </div>)

}