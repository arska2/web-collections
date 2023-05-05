import { Badge } from "react-bootstrap";
import { useGetWebsitesQuery } from "../api/apiSlice"
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';


const buttonTexts = [
    "Check it out!",
    "Visit Website",
    "Go to site",
    "See it in action",
    "Explore",
    "Learn more",
    "Discover",
    "Experience it now",
    "Start browsing",
    "Take a look",
    "Get started",
    "Try it out",
    "Enter",
    "Join the fun",
    "Get to know it",
    "Experience now",
    "Explore more",
    "Take a tour",
    "Learn about it",
    "Begin now",
];





const WebsiteCard = ({ website }) => {
    return (
        <article className="website-card" key={website.id} >
            <header>
                <h2 style={{ whiteSpace: 'nowrap' }}>{website.name}</h2>
            </header>
            <main>
                <img
                    className="website-card-image"
                    src={`/images/${website.url.split('//')[1].replace('www.', '').split('.')[0] + ".png"}`}
                    alt="website screenshot"
                />
                <div className="website-card-content">
                    <p>{website.description}</p>
                </div>
            </main>
            <Button variant="dark" size="sm" style={{ fontSize: '1.1em' }} href={website.url} target="_blank" rel="noreferrer">{buttonTexts[Math.floor(Math.random() * buttonTexts.length)]}</Button>
            <footer style={{ backgroundColor: 'lightgray' }}>{website.tags.map(tag => <Badge pill bg="secondary" key={"" + website.id + tag.id}>{tag.name}</Badge>)}</footer>
        </article>
    )
}




export const WebsiteContainer = () => {

    const { data: websites = [], isLoading } = useGetWebsitesQuery()
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
        {filtWebsites.map(website => <WebsiteCard website={website} key={website.id} />)}
    </div>)

}